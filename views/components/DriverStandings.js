import React, { useState, useEffect } from "react";
import axios from "axios";

const DriverStandings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/drivers")
      .then((response) =>
        setStandings(
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        )
      )
      .catch((error) =>
        console.error("Error fetching driver standings:", error)
      );
  }, []);

  return (
    <ul>
      {standings.map((driver) => (
        <li key={driver.Driver.driverId}>
          {driver.position}: {driver.Driver.givenName}{" "}
          {driver.Driver.familyName} - {driver.points} points
        </li>
      ))}
    </ul>
  );
};

export default DriverStandings;
