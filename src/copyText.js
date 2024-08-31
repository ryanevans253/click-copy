//original

// const copyText = (event) => {
//   const textToCopy = event.target.innerText;
//   navigator.clipboard
//     .writeText(textToCopy)
//     .then(() => {
//       console.log("Text copied to clipboard");
//     })
//     .catch((err) => {
//       console.error("Failed to copy text: ", err);
//     });
// };

// export default copyText;

//with the tooltip from gpt
// copyText.js
const copyText = (event, setShowTooltip) => {
  const textToCopy = event.target.innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard");
      if (setShowTooltip) {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 1000); // Hide tooltip after 1 second
      }
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

export default copyText;
