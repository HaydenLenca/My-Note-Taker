const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('../../helpers/uudi');

const getNotes = () => {
    return readFile('../db/db.json', 'utf-8')
      .then(rawNotes => [].concat(JSON.parse(rawNotes)));
}

router.get('/notes', (req, res) => {
    getNotes().then(notes => res.JSON(notes));
})

router.post('/notes', (req, res) => {
    getNotes().then(notes => {
        let notesArr = notes;
        const { title, text } = req.body;

        if(title && text){
            const newNote = {
                title, 
                text, 
                id: uuid()
            }
            notesArr.push(newNote);
        }

        let notesStr = JSON.stringify(notesArr);

        fs.writeFile('../db/db.json', notesStr, (err) =>
            err ? console.error(err) : console.log('\nAdded Ner Note\n'));

            res.redirect('back');
    });
})

module.exports = router;