import { useState, useRef, useEffect } from "react";
import "./App.css";
import Item from "./components/item/Item.jsx";
import Tooltip from "./components/tooltip/Tooltip.jsx";

const getListFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("items"));
  return items ? items : [];
};

const setInitialMode = (items) => {
  return items.length > 0 ? false : true;
};

function App() {
  const [items, setItems] = useState(getListFromLocalStorage());
  const [editMode, setEditMode] = useState(setInitialMode(items));
  const [textInput, setTextInput] = useState("");
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const inputRef = useRef(null);

  const toggleEditMode = () => setEditMode(!editMode);
  const toggleInstructions = () => setInstructionsVisible(!instructionsVisible);
  const handleTextInputChange = (e) => setTextInput(e.target.value);

  const addNewItem = () => {
    if (textInput.trim() !== "") {
      setItems([...items, textInput]);
      setTextInput("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [textInput]);

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewItem();
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="wrapper">
      <button onClick={toggleEditMode} className="edit-button">
        {editMode ? "Copy Mode" : "Edit Mode"}
      </button>

      <Tooltip />
      <h1>Click to Copy</h1>
      {instructionsVisible && (
        <p>
          Enter text, numbers, or links and click to copy it to your clipboard.
          To paste on a Mac, use Cmd + V, or on Windows, use Ctrl + V. Click
          "Copy Mode" in the top left when finished.
        </p>
      )}

      <button className="instructions" onClick={toggleInstructions}>
        {instructionsVisible ? "Hide Instructions" : "Show Instructions"}
      </button>

      {editMode && (
        <div className="input-container">
          <input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleTextInputChange}
            value={textInput}
            placeholder="Enter the text to copy"
            className="input-add-item"
          />
          <button onClick={addNewItem} className="submit-button">
            +
          </button>
        </div>
      )}
      {!editMode && <div className="spacer"></div>}

      {items.map((item, i) => {
        return (
          <Item
            initialText={item}
            editMode={editMode}
            key={i}
            onDelete={deleteItem}
            index={i}
          />
        );
      })}
    </div>
  );
}

export default App;
