document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => data[key] = value);

    fetch('/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        'predictionResult':'The Server is currently facing boot issues. Please try again later'
    })
    .then(data => {
        document.getElementById('predictionResult').innerText = data.prediction;
    })
    .catch(error => console.error('Error:', error));
});
function generateRandomValues() {
    document.getElementById('markets').value = Math.floor(Math.random() * 100);
    document.getElementById('duration_ms').value = Math.floor(Math.random() * 300000);
    document.getElementById('acousticness').value = Math.random().toFixed(2);
    document.getElementById('danceability').value = Math.random().toFixed(2);
    document.getElementById('energy').value = Math.random().toFixed(2);
    document.getElementById('instrumentalness').value = Math.random().toFixed(2);
    document.getElementById('liveness').value = Math.random().toFixed(2);
    document.getElementById('loudness').value = (Math.random() * -60).toFixed(2);
    document.getElementById('speechiness').value = Math.random().toFixed(2);
    document.getElementById('tempo').value = (Math.random() * 200).toFixed(2);
    document.getElementById('valence').value = Math.random().toFixed(2);
    document.getElementById('musicalkey').value = Math.floor(Math.random() * 12);
    document.getElementById('musicalmode').value = Math.floor(Math.random() * 2);
    document.getElementById('time_signature').value = Math.floor(Math.random() * 5) + 3;
    document.getElementById('count').value = Math.floor(Math.random() * 34)+1;
}

function clearFormValues() {
    const inputs = document.querySelectorAll("#predictionForm input[type='number']");
    inputs.forEach(input => {
        input.value = '';
    });
    document.getElementById('predictionResult').innerText = '';
    
}
