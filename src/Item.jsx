import { useState, useCallback } from "react";
import copyText from "./copyText";

export default function Item({ editMode, initialText, onDelete, index }) {
  const [text, setText] = useState(initialText);

  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyClick = (event) => {
    copyText(event, setShowTooltip);
  };

  return (
    <>
      {editMode ? (
        <div className="edit-container">
          <button className="delete-button" onClick={() => onDelete(index)}>
            X
          </button>
          <input
            className="input-edit-item"
            type="text"
            placeholder="Enter Link"
            value={text}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>
          <p onClick={handleCopyClick} style={{ cursor: "pointer" }}>
            {text}
          </p>
          {showTooltip && (
            <div className="tooltip">
              <span role="img" aria-label="copy">
                ✔️
              </span>
              <span style={{ marginLeft: "5px" }}>Copied!</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
