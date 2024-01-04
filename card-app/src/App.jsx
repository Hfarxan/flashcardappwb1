import { useState } from "react";
import AppRoutes from "./router/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>{AppRoutes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
