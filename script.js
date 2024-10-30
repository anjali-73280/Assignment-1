let counter = 0;

function updateCounter() {
  // It's best to retrieve the (counterValue) element from the DOM and save it as a const variable at the top of the script.
  // This prevents repeated DOM access every time the function runs, improving performance.
  document.getElementById("counterValue").textContent = counter;
}

function increase() {
  counter++;
  updateCounter();
}

function decrease() {
  counter--;
  updateCounter();
}

function resetCounter() {
  counter = 0;
  updateCounter();
}
