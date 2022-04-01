import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import { GetData } from './Controllers/GetData'
import { PostData } from './Controllers/PostData';

const URL = "http://localhost:3001/api/notes";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  
  useEffect(() => {
    GetData(URL).then(notes => {
        setNotes(notes.data)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    PostData(URL, noteObject).then(response => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    })
    
  }
  
  const handleNewNote = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} {...note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 