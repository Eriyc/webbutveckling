setInterval(() => {
  var counter = document.getElementById("counter");
  var num = counter.innerHTML;
  console.log();
  counter.innerHTML = Number(num) + 1;
}, 1000);
