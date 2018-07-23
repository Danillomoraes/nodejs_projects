
const fs = require('fs');
const _ = require('lodash');
const yargs = require ('yargs');

const notes = require('./notes.js');

var titleComm = { title: {
  describe:  "tittle of note",
  demand: true,
  alias: 't'
}};

var bodyComm = { body: {
  describe: "the body of a note",
  demand: true,
  alias: 'b'
}};

const argv = yargs
  .command('add', 'add a new note', {
    titleComm,
    bodyComm
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    titleComm
  })
  .command('remove', 'Remove a Note', {
    titleComm
  })
  .help()
  .argv;
var command = argv._[0];

if (command=== 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note == false) {
    console.log("Duplicate Note");
  } else {
    console.log("note added!");
    notes.logNote(note);
  }
} else if (command==='list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${notes.length} notes(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });

} else if(command === 'remove') {
  var removen = notes.removeNote(argv.title);
  if(removen) {
    console.log("Note Removed");
  } else {
    console.log("Note does not exist");
  }

} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if (note){
    console.log("Note Found");
    notes.logNote(note);
  }else {
    console.log("Note not Found!");
  }
} else {
  console.log('Command not recognized');
}
