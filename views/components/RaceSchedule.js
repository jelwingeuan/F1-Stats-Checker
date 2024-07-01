import React, { useState, useEffect } from "react";
import axios from "axios";

const RaceSchedule = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    axios
      .get("/api/races")
      .then((response) => setRaces(response.data.MRData.RaceTable.Races))
      .catch((error) => console.error("Error fetching races:", error));
  }, []);

  return (
    <ul>
      {races.map((race) => (
        <li key={race.round}>
          {race.raceName} - {race.Circuit.circuitName} ({race.date})
        </li>
      ))}
    </ul>
  );
};

export default RaceSchedule;
