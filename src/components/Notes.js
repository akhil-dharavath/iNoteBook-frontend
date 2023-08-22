import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NotesContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <div className="row my-3" style={{ paddingBottom: "100px" }}>
        <h2>Your Notes</h2>
        {notes.length === 0 ? (
          <div className="mx-3">No Notes Available</div>
        ) : (
          notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                showAlert={props.showAlert}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Notes;
