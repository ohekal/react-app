import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Main from "./Main";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode(event) {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
