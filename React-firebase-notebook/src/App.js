import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Navbar from "./components/Navbar";
import NoteAdd from "./components/NoteAdd";
import Notebook from "./components/Notebook";
import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyA1qxiarwXOltSqNp345h5FxiJgPQF4Fx4",
  authDomain: "react-firebase-notebook-19187.firebaseapp.com",
  databaseURL:
    "https://react-firebase-notebook-19187-default-rtdb.firebaseio.com",
  projectId: "react-firebase-notebook-19187",
  storageBucket: "react-firebase-notebook-19187.appspot.com",
  messagingSenderId: "819670459741",
  appId: "1:819670459741:web:f40f70203b267e5c6e74b4",
  measurementId: "G-KVBJP9RYB0",
};
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [noteBookData, setNoteBookData] = useState([]);

  const updateNotes = () => {
    firebase
      .database()
      .ref("notebook")
      .on("child_added", (snapshot) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          description: snapshot.val().description,
        };
        let notebook = noteBookData;
        notebook.push(note);
        setNoteBookData([...noteBookData]);
      });

    firebase
      .database()
      .ref("notebook")
      .on("child_removed", (snapshot) => {
        let notebook = noteBookData;
        notebook = noteBookData.filter((note) => note.id !== snapshot.key);
        setNoteBookData(notebook);
      });
  };

  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="note-section">
        <NoteAdd />
        <Notebook notebook={noteBookData} />
      </div>
    </div>
  );
};

export default App;
