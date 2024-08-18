document.addEventListener("DOMContentLoaded", function () {
  fetch("/cgi-bin/f1_stat_checker")
    .then((response) => response.json())
    .then((data) => {
      const resultsDiv = document.getElementById("results");
      const raceResults = data.MRData.RaceTable.Races[0].Results;

      raceResults.forEach((result, index) => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";
        resultItem.innerHTML = `${index + 1}. ${result.Driver.givenName} ${
          result.Driver.familyName
        } - ${result.Constructor.name} (${
          result.Time ? result.Time.time : result.status
        })`;
        resultsDiv.appendChild(resultItem);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
