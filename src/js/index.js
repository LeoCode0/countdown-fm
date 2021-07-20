const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let secondsValue = parseInt(seconds.textContent);

let secondsInterval = setInterval((e) => {
  seconds.textContent = secondsValue;
  if (secondsValue === 0) {
    secondsValue = 59;
    minutes.textContent = parseInt(minutes.textContent) - 1;
  } else {
    secondsValue--;
  }
}, 1000);
