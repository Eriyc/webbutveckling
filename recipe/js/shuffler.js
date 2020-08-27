const tipOneTitle = "Gör det du älskar";
const tipTwoTitle = "Jobba hårt";
const tipThreeTitle = "Jobba hårt";
const tipFourTitle = "Jobba hårt";
const tipFiveTitle = "Jobba hårt";
const tipSixTitle = "Jobba hårt";

function shuffle() {
  const slotThree = document.getElementById("slotThree");
  const slotFour = document.getElementById("slotFour");
  const slotFive = document.getElementById("slotFive");
  const title = document.getElementById("title");
  const titleDefault = "8 Steg till framgång";
  const titleAlternate = "Inget är hugget i sten";
  /* Make default slot one */
  const slotOne = document.getElementById("slotOne");
  slotOne.innerHTML = `<h4>Gör det du älskar</h4><p>Så länge du älskar vad du gör kommer allting å bra</p>`;
  /* Made default slot two */
  const slotTwo = document.getElementById("slotTwo");
  slotTwo.innerHTML = `<h4>Jobba hårt</h4><p>Framgång kommer till de som jobbar hårt!</p>`;

  const slots = [slotOne, slotTwo, slotThree, slotFour, slotFive];

  allElems = (function () {
    var ret = [],
      l = slots.length;
    while (l--) {
      ret[ret.length] = slots[l];
    }
    return ret;
  })();

  var shuffled = (function () {
      var l = allElems.length,
        ret = [];
      while (l--) {
        var random = Math.floor(Math.random() * allElems.length),
          randEl = allElems[random].cloneNode(true);
        allElems.splice(random, 1);
        ret[ret.length] = randEl;
      }
      return ret;
    })(),
    l = slots.length;

  while (l--) {
    slots[l].parentNode.insertBefore(shuffled[l], slots[l].nextSibling);
    slots[l].parentNode.removeChild(slots[l]);
  }
}

setInterval(() => shuffle(), 1000);
