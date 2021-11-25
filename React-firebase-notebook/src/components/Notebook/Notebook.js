import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./Notebook.css";

const Notebook = (props) => {
  const deleteNotebook = (id) => {
    firebase.database().ref("notebook").child(id).remove();
  };

  return (
    <>
      <section className="notebook-container">
        <div className="notebook">
          {props.notebook.map((note, index) => (
            <React.Fragment key={index}>
              <div className="notebookInfo" key={note.id}>
                <div className="notebookInfo-title">
                  <h3>{note.title}</h3>
                  <div
                    className="remove"
                    onClick={() => deleteNotebook(note.id)}
                  >
                    🗑️
                  </div>
                </div>
                <div className="notebookInfo-description">
                  <p>{note.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Notebook;
