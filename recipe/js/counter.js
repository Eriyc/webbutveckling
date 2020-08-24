setInterval(() => {
  var num = Number(localStorage.getItem("jivecount")) + 1 || 1;
  if (isNaN(num)) {
    num = 1;
  }
  var counter = document.getElementById("counter");

  // an hours is 60 minutes, which is 60 seconds
  var hours = Math.floor(num / 60 / 60);

  //
  var minutes = Math.floor(num / 60) - hours * 60;

  var seconds = num % 60;

  localStorage.setItem("jivecount", num);
  counter.innerHTML = `${`${hours}`.padStart(2, "0")}:${`${minutes}`.padStart(
    2,
    "0"
  )}:${`${seconds}`.padStart(2, "0")}`;
}, 1000);
