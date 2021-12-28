import React, { useEffect, useState } from "react";
import "./App.css";
import InputNote from "./component/InputNote";
import Navbar from "./component/Navbar";
import Notelist from "./component/Notelist";

// To SET local storage

const getStorage = () => {
  let list = localStorage.getItem("Notes");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("Notes"));
  } else {
    return [];
  }
};

function App() {
  const [addItem, setAddItem] = useState(getStorage());
  const addNote = (data) => {
    // alert("i am clicked");
    setAddItem((prevData) => {
      return [...prevData, data];
    });
  };

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(addItem));
  }, [addItem]);

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((curEl, ind) => {
        return ind !== id;
      })
    );
  };

  return (
    <div className="App">
      <Navbar />
      <InputNote passNote={addNote} />
      <div className="list-container">
        {addItem.map((val, ind) => {
          return (
            <Notelist
              key={ind}
              id={ind}
              title={val.title}
              description={val.description}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
