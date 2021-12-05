import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <Dictionary />
      <footer className="text-center">
        Coded by Ellie Kubo and open-sourced on{" "}
        <a
          href="https://github.com/Ellie575/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
