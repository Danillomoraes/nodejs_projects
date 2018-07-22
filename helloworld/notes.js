console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  // var duplicatenotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  var duplicatenotes = notes.filter((note) => note.title === title);

  console.log(duplicatenotes);

  if (duplicatenotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }else {
    return false;
  }

};

var getAll = () => {
  console.log('getting all notes');
};

var getNote = (title) => {
  notes = fetchNotes();
  var filternote = notes.filter((note) => note.title === title);
  return filternote[0]
}

var logNote = (note) => {
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

var removeNote = (title) => {
  notes = fetchNotes ();
  var removednotes = notes.filter((note) => note.title !== title);
  saveNotes(removednotes);
  return notes.length !== removednotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
