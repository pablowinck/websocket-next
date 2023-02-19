import { MessageType } from "@/hooks/useSocket";
import React from "react";
import Message from "../Message";

const Messages: React.FC<{ messages: MessageType[] }> = ({ messages }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        height: "100%",
        marginTop: "1rem",
        width: "100%",
      }}
    >
      {messages.map((message, index) => (
        <div
          style={{
            width: "100%",
            gap: "1rem",
            alignItems: "center",
          }}
          key={JSON.stringify(message) + index}
        >
          <Message message={message} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
