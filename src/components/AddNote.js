import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NotesContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(
      note.title,
      note.description,
      note.tag === "" ? "default" : note.tag
    );
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={note.title}
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={note.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            value={note.tag}
            name="tag"
            onChange={onChange}
          />
        </div>
        <button
          disabled={
            note.title.length < 3 || note.description.length < 5 ? true : false
          }
          type="submit"
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
