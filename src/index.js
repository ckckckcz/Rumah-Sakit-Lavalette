import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbars";
import Jumbotron from "./components/Jumbotron1";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <Footer />
  </React.StrictMode>
);
