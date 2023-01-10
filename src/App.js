import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import CreateNotes from "./Components/CreateNotes";
import Notes from "./Components/Notes";
import { useEffect, useState } from "react";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i am clicked")
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log("hi", note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currentdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Navbar />
      <CreateNotes passNote={addNote} />

      <div className="lg:flex lg:flex-wrap lg:justify-start">
        {addItem.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
