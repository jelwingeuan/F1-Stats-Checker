import React from "react";
import "./App.css";
import DriverStandings from "./components/DriverStandings";
import RaceSchedule from "./components/RaceSchedule";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>F1 Stats Checker</h1>
      </header>
      <main>
        <section>
          <h2>Driver Standings</h2>
          <DriverStandings />
        </section>
        <section>
          <h2>Race Schedule</h2>
          <RaceSchedule />
        </section>
      </main>
    </div>
  );
}

export default App;
