let showClock = document.getElementsByClassName("clockContainer")[0];
function clockTime() {
  let clock = new Date();
  let seconds = clock.getSeconds();
  let minutes = clock.getMinutes();
  let hours = clock.getHours();

  if (seconds < 9) {
    seconds = "0" + seconds;
  }
  if (minutes < 9) {
    minutes = "0" + minutes;
  }
  if (hours < 9) {
    hours = "0" + hours;
  }

  showClock.innerHTML = `${hours}:${minutes}:${seconds}`;
  
  setInterval(clockTime, 1000)
}

clockTime()
