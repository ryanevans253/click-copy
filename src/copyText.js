const copyText = (event) => {
  const textToCopy = event.target.innerText;
  navigator.clipboard
    .writeText(textToCopy)

    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

export default copyText;
