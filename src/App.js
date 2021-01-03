import React from "react";

import "./styles.css";
import EventsPage from "./Pages/EventsPage";
import NavBarGlobal from "./components/navBar";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBarGlobal />{" "}
      </div>
      <EventsPage />
    </div>
  );
}
