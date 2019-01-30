import React, { Component } from 'react';

class Note extends Component {
  handleChange = (id) => {
    // e.preventDefault()
    // console.log(id)
    this.props.removeNote(id)
  }
  render() {
    return (
      <div className="note">

        <div style={{ width: "200px" }} className="container"><h3>{this.props.noteContent}<div style={{ float: "right" }} onClick={() => this.handleChange(this.props.id)} className="cross">x</div></h3></div>

      </div >
    );
  }
}

export default Note;