import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NotesContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { editNote } = context;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [enote, setEnote] = useState(note);
  const handleSubmit = (currentNote) => {
    editNote(
      currentNote._id,
      currentNote.title,
      currentNote.description,
      currentNote.tag
    );
    setOpen(false);
    props.showAlert("Note has been Updated", "success");
  };
  const onChange = (e) => {
    setEnote({ ...enote, [e.target.name]: e.target.value });
  };
  const handleDelete = () => {
    deleteNote(note._id);
    props.showAlert("Note has been Deleted", "success");
  };

  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <IconButton onClick={() => handleOpen()}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete()}>
            <DeleteIcon />
          </IconButton>
          {open && (
            <Dialog
              fullWidth
              maxWidth="sm"
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle>Update Note</DialogTitle>
              <DialogContent>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <TextField
                    fullWidth
                    hiddenLabel
                    size="small"
                    name="title"
                    id="title"
                    onChange={onChange}
                    defaultValue={enote.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <TextField
                    fullWidth
                    hiddenLabel
                    size="small"
                    name="description"
                    id="description"
                    onChange={onChange}
                    defaultValue={enote.description}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <TextField
                    fullWidth
                    hiddenLabel
                    size="small"
                    name="tag"
                    id="tag"
                    onChange={onChange}
                    defaultValue={enote.tag}
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleClose()}
                >
                  Close
                </Button>
                <Button
                  disabled={
                    enote.title.length < 3 || enote.description.length < 5
                      ? true
                      : false
                  }
                  variant="contained"
                  color="success"
                  onClick={() => handleSubmit(enote)}
                >
                  Update
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
