import { useState, useCallback } from "react";
import copyText from "./copyText";

export default function Item({ editMode, initialText, onDelete, index }) {
  const [text, setText] = useState(initialText);
  const [shimmer, setShimmer] = useState(false);

  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleCopyClick = (event) => {
    copyText(event);
    setShimmer(true);
    setTimeout(() => setShimmer(false), 1500);
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
        <p
          onClick={handleCopyClick}
          style={{ cursor: "pointer" }}
          className={`link-to-copy ${shimmer ? "shimmer-active" : ""}`}
        >
          {text}
        </p>
      )}
    </>
  );
}
