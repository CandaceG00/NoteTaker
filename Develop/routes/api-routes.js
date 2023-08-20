const router = require('express').Router();
const { uuid } = require('uuidv4');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile("db/db.json", "UTF-8", (err, data)=> {
        const allNotes = data
        res.json(JSON.parse(allNotes))
    }) 
});

router.post('/api/notes', (req, res) => {
    fs.readFile("db/db.json", "UTF-8", (err, data)=> {
        const allNotes = JSON.parse(data)
        const {title, text} = req.body;
    const newNote = {
        title, text, note_id: uuid()
    }
    allNotes.push(newNote)
    fs.writeFile('db/db.json', JSON.stringify(allNotes), (err) => {
        console.log("Note added!")
        res.status(200).json({Message: "added note"})
    })
    }) 
})


module.exports = router;