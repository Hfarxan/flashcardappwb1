import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../cards.css";
import useFlashCardPage from "../customHook";
import { CgNotes } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const FlashCard = ({ card, setRemovingId }) => {
  const navigate = useNavigate()
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(card.status);

  const { updateCardStatus } = useFlashCardPage();

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={`flash-card ${isFlipped ? "flip" : ""}`}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div onClick={handleCardClick} className="z-1">
        <div className="icons">
          <FaTrash
            onClick={(e) => {
              setRemovingId(card.id);
              e.stopPropagation();
            }}
            className="trash"
          />
          {currentStatus != "Noted" && (
            <CgNotes
              className="note"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentStatus("Noted");
                updateCardStatus(card.id, "Noted");
              }}
            />
          )}
          <BiSolidEditAlt onClick={() => navigate("/flashcards/create/" + card.id)} />
        </div>
        <div className="card-front">
          <Card className="card-body">
            <CardContent className="card-content">
              <span>{card.question}</span>
              <p className="card-status">Status: {currentStatus}</p>
            </CardContent>
          </Card>
        </div>
        <div className="card-back">
          <Card className="card-body">
            <CardContent>
              <span className="card-text">{card.text}</span>
            </CardContent>
          </Card>
          <Button
            variant="contained"
            className="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentStatus(
                currentStatus == "Want To Learn" ? "Learned" : "Want To Learn"
              );
              updateCardStatus(
                card.id,
                currentStatus == "Want To Learn" ? "Learned" : "Want To Learn"
              );
            }}
          >
            {currentStatus == "Want To Learn"
              ? "Mark As Learned"
              : "Want To Learn"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;
