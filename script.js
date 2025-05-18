//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const output = document.getElementById("output");

  // Clear previous message
  output.innerText = "";

  // Async delay function
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Validate delay
  if (!isNaN(delay) && delay >= 0) {
    await wait(delay);
    output.innerText = text;
  } else {
    output.innerText = "Please enter a valid delay time in milliseconds.";
  }
});

