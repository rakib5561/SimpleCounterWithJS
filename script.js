const increment = document.getElementById("incrementEl");
const decrement = document.getElementById("decrementEl");
const counter = document.getElementById("counterEl");
let count = 0;

increment.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

decrement.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});
