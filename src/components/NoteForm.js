import React, { Component } from 'react';

class NoteForm extends Component {
  myInput = React.createRef();

  handleChange = (e) => {
    e.preventDefault();
    this.props.addNote(this.myInput)
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleChange}>

        <input ref={this.myInput} type="text" placeholder="add new note"></input>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default NoteForm;