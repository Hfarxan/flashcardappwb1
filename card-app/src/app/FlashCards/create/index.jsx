import React, { useEffect, useState } from "react";
import "./createFlashCard.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../../hooks/useFetch";

const CreateFlashCardPage = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [question, setQuestion] = useState("");
  const [text, setText] = useState("");

  const { data, loading, error } = useFetch(
    "http://localhost:3001/cards/" + id
  );

  useEffect(() => {
    setQuestion(data.question);
    setText(data.text);
  }, [id, data]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = new Date().getTime();

      const cardData = {
        question,
        text,
        createdAt: date,
        updatedAt: date,
        status: "Want To Learn",
      };

      const response = await fetch("http://localhost:3001/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        toast("Card Created");
      }
      history("/flashcards");
    } catch (e) {
      console.error(e);
      toast.error(e.message ?? e.data.message);
    }
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const date = new Date().getTime();

      const cardData = {
        question,
        text,
        createdAt: data.createdAt,
        updatedAt: date,
        status: data.status,
      };

      const response = await fetch("http://localhost:3001/cards/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        toast("Card Updated");
      }
      history("/flashcards");
    } catch (e) {
      console.error(e);
      toast.error(e.message ?? e.data.message);
    }
  };

  if (!!id && loading) return <div>Laoding...</div>;

  return (
    <div className="create-flash-card-container">
      <h1>Create Flash Card</h1>
      <form className="create-flash-card-form">
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          label="Text"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={id ? onUpdate : onSubmit}
        >
          Create Flash Card
        </Button>
      </form>
    </div>
  );
};

export default CreateFlashCardPage;
