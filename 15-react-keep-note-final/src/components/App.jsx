import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNote(id){
    setNotes( prevValue =>{
      return prevValue.filter( (val, index) =>{
        return index != id;
      } )
    } )
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete= {deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
