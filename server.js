const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'data' folder
app.use('/data', express.static(path.join(__dirname, 'data')));

// Serve other static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
