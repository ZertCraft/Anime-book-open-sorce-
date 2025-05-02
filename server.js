const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for getting manga data by ID
app.get('/api/manga/:id', async (req, res) => {
    const mangaId = req.params.id;
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/manga/${mangaId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching manga data' });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
