import { MessageType } from "@/hooks/useSocket";
import React from "react";

const Message: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <h3
      style={{
        display: "flex",
        gap: "1rem",
        width: "100%",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          filter: "brightness(0.5)",
          flex: 1,
          textAlign: "right",
        }}
      >
        {message.username}
      </p>
      <p
        style={{
          fontWeight: "normal",
          flex: 1,
        }}
      >
        {message.message}
      </p>
    </h3>
  );
};

export default Message;
