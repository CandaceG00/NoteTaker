const router = require('express').Router();
const { uuid } = require('uuidv4');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFileSync("db/db.json")
});