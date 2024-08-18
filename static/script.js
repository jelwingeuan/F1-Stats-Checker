async function getF1Stats() {
    const driverName = document.getElementById('driverName').value.trim();
    const resultDiv = document.getElementById('result');
    if (driverName === '') {
        resultDiv.innerHTML = 'Please enter a driver\'s name.';
        return;
    }

    resultDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`/cgi-bin/f1_stats.cgi?driverName=${encodeURIComponent(driverName)}`);
        const data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = 'No results found. Please check the driver\'s name and try again.';
            return;
        }

        resultDiv.innerHTML = `
            <p><strong>${data.driver}</strong></p>
            <p>Team: ${data.team}</p>
            <p>Position: ${data.position}</p>
            <p>Points: ${data.points}</p>
            <p>Wins: ${data.wins}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = 'An error occurred while fetching data. Please try again later.';
    }
}
