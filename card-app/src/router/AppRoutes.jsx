import { Route } from "react-router-dom";
import Home from "../app/home";
import FlashCards from "../app/FlashCards";
import FlashCardCreate from "../app/FlashCards/create";
import ContactCreate from "../app/Contact/create";
import Contact from "../app/Contact";

const AppRoutes = [
  <Route path="/" key="home" element={<Home />} />,
  <Route path="/contact" key="contact" element={<Contact />} />,
  <Route
    path="/contact/create"
    key="contactCreate"
    element={<ContactCreate />}
  />,
  <Route path="/flashcards" key="cardIndex" element={<FlashCards />} />,
  <Route
    path="/flashcards/create/:id?"
    key="cardCreateIndex"
    element={<FlashCardCreate />}
  />,
];

export default AppRoutes;
