function getMangaData() {
    const mangaId = document.getElementById('mangaId').value;
    const mangaInfo = document.getElementById('manga-info');
    
    if (!mangaId) {
        alert("Please enter a Manga ID.");
        return;
    }

    fetch(`http://localhost:5000/api/manga/${mangaId}`)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                mangaInfo.innerHTML = `
                    <div class="manga-card">
                        <h2>${data.data.title}</h2>
                        <img src="${data.data.images.jpg.image_url}" alt="${data.data.title}" />
                        <p>${data.data.synopsis}</p>
                    </div>
                `;
            } else {
                mangaInfo.innerHTML = '<p>No data found for this Manga ID.</p>';
            }
        })
        .catch(error => {
            mangaInfo.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
            console.error('Error fetching manga:', error);
        });
}
