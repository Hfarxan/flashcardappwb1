import React from "react";
import useFetch from "../../hooks/useFetch";
import MessageItem from "./_component/MessageItem";
import Button from "@mui/material/Button";

import "./messages.css";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  const url = "http://localhost:3001/messages";
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <Button onClick={() => navigate("/contact/create")} className="custom-btn" variant="contained">
        Create Message
      </Button>
      <Button onClick={() => navigate("/")} variant="contained">
        Home Page
      </Button>

      {data.map((message) => {
        return <MessageItem key={message.id} {...message} />;
      })}
    </div>
  );
};

export default Messages;
