import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./cards.css";
import FlashCard from "./_components/FlashCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useFlashCardPage from "./customHook";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const index = () => {
  const navigate = useNavigate();

  const [removingId, setRemovingId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortCriteria, setSortCriteria] = useState("asc");
  const [filterCriteria, setFilterCriteria] = useState("");
  const { data, loading, error } = useFetch(
    `http://localhost:3001/cards?question_like=${searchText}&_sort=updatedAt&_order=${sortCriteria}&status_like=${filterCriteria}`
  );
  const { removeCard, isRemoving } = useFlashCardPage();

  return (
    <section>
      <div className="features">
        <div>
          <Button
            onClick={() => navigate("/flashcards/create")}
            variant="contained"
          >
            Create Card
          </Button>
          <TextField
            type="text"
            value={searchText}
            sx={{
              input: {
                height: 7,
              },
            }}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="label-for-sorting">Sort By Date</InputLabel>
            <Select
              labelId="label-for-sorting"
              id="select-for-sorting"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              label="Sort By Date"
              defaultValue="asc"
            >
              <MenuItem value="asc">Date Ascending</MenuItem>
              <MenuItem value="desc">Date Descending</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="label-for-filtering">Filter By Status</InputLabel>
            <Select
              labelId="label-for-filtering"
              id="select-for-filtering"
              value={filterCriteria}
              onChange={(e) => setFilterCriteria(e.target.value)}
              label="Filter By Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Want To Learn">Want To Learn</MenuItem>
              <MenuItem value="Noted">Noted</MenuItem>
              <MenuItem value="Learned">Learned</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {data.length > 0 ? (
        loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>an error occurred :(</div>
        ) : (
          <div id="cards-container">
            {data.map((card) => {
              return (
                <FlashCard
                  key={card.id}
                  card={card}
                  setRemovingId={setRemovingId}
                />
              );
            })}
          </div>
        )
      ) : (
        <div className="not-found">No Matching Data Found</div>
      )}
      <Modal
        open={removingId != null}
        onClose={() => setRemovingId(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="red"
          >
            Are you sure to delete this card?
          </Typography>
          <div className="modal-buttons">
            <Button onClick={() => setRemovingId(null)} variant="outlined">
              Cance
            </Button>
            <LoadingButton
              loading={isRemoving}
              onClick={() => {
                removeCard(removingId);
              }}
              color="error"
              variant="contained"
            >
              Delete
            </LoadingButton>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default index;
