import React, { useState } from 'react'
import './GetNote.scss'
import NoteIcon from './NoteIcon'
import UpdateNote from './UpdateNote'

export default function GetNote(props) {
  const [show, setshow] = useState(false)
  const [CurrentNotes, setCurrentNotes] = useState('')

  const handleCurrentNote = (note) => {
    console.log('show Note : ', note)
    setshow(true)
    setCurrentNotes(note)
  }

  const handleCloseModel = () => {
    // console.log('show : ', show)
    setshow(false)
  }

  const Notes = props.state.RecordData.map((note, index) => (
    <div
      className="Note-Container"
      key={index}
      style={{ backgroundColor: note.noteColor }}
    >
      <div
        className="Note-Title"
        onClick={() => {
          handleCurrentNote(note)
        }}
      >
        {note.title}
      </div>
      <div
        className="Note-Discription"
        onClick={() => {
          handleCurrentNote(note)
        }}
      >
        {note.discription}
      </div>
      <div
        className="Note-ReminderTime"
        onClick={() => {
          handleCurrentNote(note)
        }}
      >
        {note.reminderTime === null ? 'No Reminder Set' : note.reminderTime}
      </div>
      <NoteIcon GetNote={props.GetNotes} noteID={note.noteID} />
      <UpdateNote
        show={show}
        CurrentNote={CurrentNotes}
        handleCloseModel={handleCloseModel}
        GetNote={props.GetNotes}
        onHide={() => {
          setshow(false)
        }}
      ></UpdateNote>
    </div>
  ))

  return (
    <div className="GetNote-Container">
      <div className="GetNote-Sub-Container">{Notes}</div>
    </div>
  )
}
