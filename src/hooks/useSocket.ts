import { useCallback, useEffect, useMemo, useState } from "react";
import { useStorageState } from "./useStorageState";

export type MessageType = {
  username: string;
  message: string;
};

export const useSocket = ({ username }: { username: string }) => {
  const [messages, setMessages] = useStorageState<MessageType[]>(
    "messages",
    []
  );
  const [status, setStatus] = useState(0);
  const uid = useMemo(() => Math.random().toString(36).substring(2, 9), []);
  const [socket, setSocket] = useState<WebSocket>();
  const initSocket = useCallback(
    (
      setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>,
      setStatus: React.Dispatch<React.SetStateAction<number>>
    ): WebSocket => {
      const url = process.env.NEXT_PUBLIC_SOCKET_URL || "localhost:8080";
      let instance = new WebSocket(`ws://${url}/chat/${username}@${uid}`);
      instance.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      };
      instance.onopen = () => {
        setStatus(1);
      };
      instance.onclose = () => {
        setStatus(3);
        instance = initSocket(setMessages, setStatus);
      };
      instance.onerror = () => {
        setStatus(3);
      };
      return instance;
    },
    [uid, username]
  );

  useEffect(() => {
    const socket = initSocket(setMessages, setStatus);
    setSocket(socket);
    return () => {
      socket.close();
    };
  }, [initSocket, setMessages]);

  const sendMessage = useCallback(
    (message: string) => {
      if (socket) {
        socket.send(message);
      }
    },
    [socket]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  return {
    socket,
    messages,
    status,
    sendMessage,
    clearMessages,
    isReady:
      socket?.readyState === socket?.OPEN ||
      socket?.readyState === socket?.CONNECTING,
  };
};
