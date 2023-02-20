import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Note from '../Note/Note';
import s from './notes.module.css'

const fetchNotes = () => {
    return axios.get('http://localhost:3000/notes')
}

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
            .then(res => {
                setNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
      <div className={s.wrapper}>
        <h1>Theme</h1>
        {notes.map((note) => (
            <Note key={note.id} title={note.text} descr={note.descr} />
        ))}
      </div>
    );
};

export default Notes;

// rsc

// .json() -