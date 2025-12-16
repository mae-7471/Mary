function updateClock() {
  const now = new Date();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  let time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").innerHTML = time;
}

updateClock();
setInterval(updateClock, 1000);
