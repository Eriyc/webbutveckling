const tipOneTitle = "Gör det du älskar";
const tipTwoTitle = "Jobba hårt";
const tipThreeTitle = "Jobba hårt";
const tipFourTitle = "Jobba hårt";
const tipFiveTitle = "Jobba hårt";
const tipSixTitle = "Jobba hårt";

/* Make sure everything stays consistent by using a function */
const makeStep = (title, description) =>
  `<div class="card"><h4>${title}</h4><p>${description}</p></div>`;

/* Generates a random integer from -1 to 7 */
const getRandom = () => Math.floor(Math.random() * 8) - 1;

function shuffle() {
  const slotThree = document.getElementById("slotThree");
  const slotFour = document.getElementById("slotFour");
  const slotFive = document.getElementById("slotFive");
  const slotTwo = document.getElementById("slotTwo");
  const slotOne = document.getElementById("slotOne");
  const slotSix = document.getElementById("slotSix");

  /* Slots 1-6 */
  slotOne.innerHTML = makeStep(
    `${getRandom()}. Börja med att förbereda smeten`,
    "Förbered de torra ingredienserna i en behållare och de flytande ingredienserna i en separat behållare"
  );

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

  slotFive.innerHTML = makeStep(
    `${getRandom()}. Låt stå`,
    "Den som väntar på något gott väntar aldrig för länge. Detta gäller självklart detta receptet också."
  );

  slotSix.innerHTML = makeStep(
    `${getRandom()}. Baka ut`,
    "Kavla ut smeten och vik till lämplig storlek. Tumregeln är <strong><em>ju större desto bättre</em></strong>"
  );

  /* the images */
  const imageOne = document.getElementById("imageOne");
  const imageTwo = document.getElementById("imageTwo");

  const slots = [slotOne, slotTwo, slotThree, slotFour, slotFive, slotSix, imageOne, imageTwo];

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
