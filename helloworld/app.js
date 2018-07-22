console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require ('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('command: ', command);
console.log('Yargs', argv);

if (command=== 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note == false) {
    console.log("Duplicate Note");
  } else {
    console.log("note added!");
    notes.logNote(note);
  }
} else if (command==='list'){
  notes.getAll();
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
