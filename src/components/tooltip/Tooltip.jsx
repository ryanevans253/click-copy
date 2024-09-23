import React from "react";

const Tooltip = () => {
  const message = `This app helps you efficiently copy and paste frequently used information, like your email, phone number, LinkedIn URL, and portfolio site, into job applications. Simply add your details once, click to copy them, and then paste wherever needed.
  No accounts or data storage required—just a straightforward tool with open-source code for transparency.
  If you find this app useful, consider buying me a coffee to support further development!`;

  return (
    <div className="tooltip-button-container">
      <button
        className="tooltip-button"
        aria-label="Tooltip"
        aria-describedby="tooltip-message"
      >
        ?
      </button>
      <div id="tooltip-message" className="tooltip-message">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
