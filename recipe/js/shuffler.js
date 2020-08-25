(() => {
  const title = document.getElementById("title");
  const titleDefault = "8 Steg till framgång";
  const titleAlternate = "Inget är hugget i sten";

  const slotOne = document.getElementById("slotOne");
  /* Make default slot one */
  slotOne.innerHTML = `<h4>Gör det du älskar</h4><p>Så länge du älskar vad du gör kommer allting å bra</p>`;

  const slotTwo = document.getElementById("slotTwo");
  /* Made default slot two */
  slotTwo.innerHTML = `<h4>Jobba hårt</h4><p>Framgång kommer till de som jobbar hårt!</p>`;

  const slotThree = document.getElementById("slotThree");

  const slotFour = document.getElementById("slotFour");

  const slotFive = document.getElementById("slotFive");

  const slotSix = document.getElementById("slotSix");

  const tipOneTitle = "Gör det du älskar";
  const tipTwoTitle = "Jobba hårt";
  const tipThreeTitle = "Jobba hårt";
  const tipFourTitle = "Jobba hårt";
  const tipFiveTitle = "Jobba hårt";
  const tipSixTitle = "Jobba hårt";

  const slots = [slotOne, slotTwo, slotThree, slotFour, slotFive, slotSix];

  function shuffle(elems) {
    allElems = (function () {
      var ret = [],
        l = elems.length;
      while (l--) {
        ret[ret.length] = elems[l];
      }
      return ret;
    })();

    var shuffled = (function () {
        console.log("shuffling");
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
      l = elems.length;

    while (l--) {
      elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
      elems[l].parentNode.removeChild(elems[l]);
    }
  }

  setInterval(shuffle(slots), 100);
})();
