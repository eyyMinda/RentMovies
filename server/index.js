const path = require('path');
const express = require('express');
const PORT = 3001;
const app = express();

const connection = mysql.createConnection('localhost', PORT);

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello there ', port: PORT + '!' });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});