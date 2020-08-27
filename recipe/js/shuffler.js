const tipOneTitle = "Gör det du älskar";
const tipTwoTitle = "Jobba hårt";
const tipThreeTitle = "Jobba hårt";
const tipFourTitle = "Jobba hårt";
const tipFiveTitle = "Jobba hårt";
const tipSixTitle = "Jobba hårt";

const makeStep = (title, description) =>
  `<div class="card"><h4>${title}</h4><p>${description}</p></div>`;

const getRandom = () => Math.floor(Math.random() * 8) - 1;

function shuffle() {
  const slotThree = document.getElementById("slotThree");
  const slotFour = document.getElementById("slotFour");
  const slotFive = document.getElementById("slotFive");

  /* Make default slot one */
  const slotOne = document.getElementById("slotOne");
  slotOne.innerHTML = makeStep(
    `${getRandom()}. Börja med att förbereda smeten`,
    "Förbered de torra ingredienserna i en behållare och de flytande ingredienserna i en separat behållare"
  );
  /* Made default slot two */
  const slotTwo = document.getElementById("slotTwo");
  slotTwo.innerHTML = makeStep(
    `${getRandom()}. Vispa ihop ingredienser`,
    "Vispa ihop de flytande ingredienserna och se till att de mixas ordentligt."
  );

  slotThree.innerHTML = makeStep(
    `${getRandom()}. Slå samman torra och flytande`,
    "Sålla ner de torra ingredienserna i den varma flytande lösningen"
  );

  slotFour.innerHTML = makeStep(
    `${getRandom()}. Blås på smeten`,
    "Smeten är nu redo att bakas ut, men för att förbereda smeten för vad som kommer hjälper det att sjunga vaggvisor för den och blåsa på ställen smeten har ont."
  );

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
