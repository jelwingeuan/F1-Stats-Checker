import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [drivers, setDrivers] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/drivers")
      .then((response) =>
        setDrivers(
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        )
      )
      .catch((error) =>
        console.error("Error fetching driver standings:", error)
      );

    axios
      .get("http://localhost:5000/api/races")
      .then((response) => setRaces(response.data.MRData.RaceTable.Races))
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  return (
    <div>
      <h1>F1 Stats Checker</h1>
      <h2>Driver Standings</h2>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.Driver.driverId}>
            {driver.position}: {driver.Driver.givenName}{" "}
            {driver.Driver.familyName} - {driver.points} points
          </li>
        ))}
      </ul>
      <h2>Races</h2>
      <ul>
        {races.map((race) => (
          <li key={race.round}>
            {race.raceName} - {race.Circuit.circuitName} ({race.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
