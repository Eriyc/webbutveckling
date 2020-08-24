import React from "react";
import "./App.css";
import projects from "./Projects";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Erics <code>Webbutvecklings</code>-portfolio
        </h1>
      </header>
      <main className="Project-grid">
        {projects.map((project) => (
          <Card {...project} />
        ))}
      </main>
    </div>
  );
}

export default App;
