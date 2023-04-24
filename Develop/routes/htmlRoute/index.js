const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;