const suprise = () => {
  console.log("gg");
};

const necroText = [
  "f͠͏̸͜a͢͜ç̵e̕͘͟͞͏ ̸́ć̶͜͝o̸͜n̶̡s̨̕e̵̷͠q̨͟͡u̷̷͜è̴̕n̷̢̢̛ç̕e҉҉̵̨́s͜",
  "f̸̢̢̰̫͕̈́͒ả̶͖̘̙̙̬͈͍̮̦͛́͑̋̊̍c̷̨̧̝̰͇͖͉̗̪͉͊̆͂͆̈́̀̎̕̚͝e̴̬̱͕͗̽̋͛̒̋̍͛ ̴̢̙̣̟͚̘̪͍̅c̶̨̢͔̣̒͌̅͗̏o̵̹̩̞̮̪̣͙̦͛̅̿͑̈͜n̶̙̯͙̪̂̕s̸̥̼̖̦̤̮͉̿̑͛̉̑̀̈́͜͝͝è̵̲̒̎̓q̶̡̻̼̯̮̽̾̽̈́̅̚ͅü̵̧̬͈̫̖͒̔̄ę̷̨̼͖͙̀̋̔̅̏̿̑n̴̜͙̰͙͗̂̅͆̏̾̈́̚c̴̨̮͚̱̞̙͖̘͊͐͗͗͆͌͂͘e̵̳̺̘͇̜͍̝̭̭̐̄̎̉s̸̨̠̹̞̫̹̟̄̎̓̍͂̏̕ͅ",
  "f̸̋͒͑҉͍̲̪̙a̢̫͇̳̮͔͈ͯͪͥͅc̯͙̹̎ͭ̋͒ͅȩ̦͚̹̺̗̥̒ͯͭ̽̈́̈́̀̚ ̶̨̤̻̞͔̬̻͍͗̃ć̨̩̩̠͙͔͓̪̏ͫ̑ͥo̟̻̖̠̿̽́̂̑ͨ͒̄ͅn̸͕̎̑̎̾ͧͨͭ͞͠s̅̓̌҉̹͎̠͎ȇ̔͏̵̥̮̙̥̖̳̲̗̀q̶̴̡̤͚͇̥͙̒̈̒̔̒̄̂ͅǔ̱͚̾ͩͯ͑͜e̟̩̮̽͝͡n͖̣̳̘͔̗̍̈̌̃̃ͦͥ͠c̵̫͎̔̂̀ẹ͎͎͓̹̮͖̍ͪ̿̓̑͝sͫ͊͌̂̒̿҉̧̩͇̞͔͖̗͉̱͙",
];

const body = document.getElementById("body");
const overlay = document.getElementById("overlay");
const footer = document.getElementById("footer");

const necropolis = document.getElementById("necropolis");
const fullscreen = document.getElementById("fullscreen");

body.addEventListener("mousemove", (e) => {
  if (overlay) {
    overlay.style.top = `${e.pageY - 40}px`;
    overlay.style.left = `${e.pageX + 10}px`;
  }
});

const spookNecro = setInterval(() => {
  const text = necroText[Math.floor(Math.random() * 2)];

  necropolis.innerText = "Necropolis has risen. Prepare or " + text;
}, 16);

const crabVideo = document.createElement("video");
crabVideo.src = "./img/crabbb.mp4";

const kalleVideo = document.createElement("video");
kalleVideo.src = "./img/kalle.mp4";

const kodisVideo = document.createElement("video");
kodisVideo.src = "./img/kodis.mp4";
let fun = "crab";

const closeCrab = () => {
  fullscreen.style.display = "none";
  fullscreen.removeChild(crabVideo);
};

const closeBus = () => {
  fullscreen.style.display = "none";
  fullscreen.removeChild(kalleVideo);
};

const openCrab = () => {
  fullscreen.style.display = "block";
  fullscreen.appendChild(crabVideo);
  crabVideo.play();
  fun = "crab";
};

const openBus = () => {
  fullscreen.style.display = "block";
  fullscreen.appendChild(kalleVideo);
  kalleVideo.play();
  fun = "bus";
};

const playKodis = () => {
  fullscreen.style.display = "block";
  fullscreen.appendChild(kodisVideo);
  kodisVideo.play();
  fun = "kodis";
};

const closeKodis = () => {
  fullscreen.style.display = "none";
  fullscreen.removeChild(kodisVideo);
};

const closeVideo = () => {
  console.log(fun);
  if (fun === "crab") {
    closeCrab();
  } else if (fun === "bus") {
    closeBus();
  } else if (fun === "kodis") {
    closeKodis();
  }
};
