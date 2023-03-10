import { useSocket } from "@/hooks/useSocket";
import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Messages from "../Messages";
import Status from "../Status";
import { useLayoutSize } from "@/hooks/useLayoutSize";

const Chat: React.FC = () => {
  const [username, setUsername] = useState("pablowinck");
  const [userKey, setUserKey] = useState("");
  const { messages, status, sendMessage, clearMessages, isReady } = useSocket({
    username: userKey,
  });
  const [message, setMessage] = useState("");
  const { isMobile } = useLayoutSize();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            
        }}>
        <h1>Chat</h1>
        <Status state={isReady && !!userKey ? status : 3} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!username || !username.trim()) return;
            setUserKey(username);
          }}
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            value={username}
            onChange={(e) => {
              if (e.target.value.length <= 12)
                setUsername(e.target.value.replace("@", ""));
            }}
            style={{
              width: "10rem",
            }}
          />
          <Button type="submit">Connect</Button>
        </form>
      </div>
      <Messages messages={messages} />
      <form
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: "3rem 0",
          maxWidth: "30rem",
          flexDirection: isMobile ? "column" : "row",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          if (!message || !message.trim() || !userKey) return;
          sendMessage(message);
          setMessage("");
        }}
      >
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
        <div
        style={{
            display: "flex",
            gap: "1rem",
        }}>
          <Button type="submit">send</Button>
          <Button
            type="button"
            style={{
              backgroundColor: "#ce5959",
              width: "8rem",
            }}
            onClick={clearMessages}
          >
            clear chat
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
