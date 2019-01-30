import React, { Component } from 'react';
import Note from './components/Note'
import NoteForm from './components/NoteForm'
import firebase from './firebase'


class App extends Component {
  constructor() {
    super();
    this.app = firebase
    this.database = this.app.database().ref().child('notes')
    this.state = {
      notes: []
    }

    // console.log(firebase.database());

  }

  componentWillMount() {
    const prevNotes = this.state.notes
    this.database.on('child_added', snap => {
      prevNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: prevNotes
      })
    })
    console.log(this.state.notes)

    this.database.on('child_removed', snap => {
      for (var i = 0; i < prevNotes.length; i++) {
        if (prevNotes[i].id === snap.key) {
          prevNotes.splice(i, 1)
        }
      }
      this.setState({
        notes: prevNotes
      })
    })
  }

  addNote = (input) => {
    // console.log(input.current.value)
    this.database.push().set({ noteContent: input.current.value })
  }
  removeNote = (inputId) => {
    this.database.child(inputId).remove()
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to App Component!</h1>
        <NoteForm addNote={this.addNote} />
        {this.state.notes.map(note => {
          return (
            <Note noteContent={note.noteContent} removeNote={this.removeNote} id={note.id} key={note.id} />
          )
        })}
      </div>
    );
  }
}

export default App;
