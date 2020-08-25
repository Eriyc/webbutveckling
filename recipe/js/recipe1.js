(() => {
  "use strict";
  var currId = 0,
    obfuscators = {},
    alreadyParsed = [];

  function obfuscate(elem, string) {
    var multiMagic, currNode, listLen, nodeI;

    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function replaceRand(string, i) {
      var randChar = String.fromCharCode(randInt(64, 95));
      return (
        string.substr(0, i) + randChar + string.substr(i + 1, string.length)
      );
    }

    function initMagic(el, str) {
      var i = 0,
        obsStr = str || el.innerHTML,
        strLen = obsStr.length;
      if (!strLen) return;
      obfuscators[currId].push(
        window.setInterval(function () {
          if (i >= strLen) i = 0;
          obsStr = replaceRand(obsStr, i);
          el.innerHTML = obsStr;
          i++;
        }, 0)
      );
    }

    if (string.indexOf("<br>") > -1) {
      elem.innerHTML = string;
      listLen = elem.childNodes.length;
      for (nodeI = 0; nodeI < listLen; nodeI++) {
        currNode = elem.childNodes[nodeI];
        if (currNode.nodeType === 3) {
          multiMagic = document.createElement("span");
          multiMagic.innerHTML = currNode.nodeValue;
          elem.replaceChild(multiMagic, currNode);
          initMagic(multiMagic);
        }
      }
    } else {
      initMagic(elem, string);
    }
  }

  window.mineParse = function initParser(input) {
    var parsed,
      i = currId;
    if (i > 0) {
      while (i--) {
        if (alreadyParsed[i].nodeType) {
          if (!document.contains(alreadyParsed[i])) {
            clearObfuscators(i);
          }
        }
      }
    }
    parsed = parseStyle(input);
    alreadyParsed.push(parsed);
    currId++;
    return {
      parsed: parsed,
      raw: parsed.innerHTML,
    };
  };

  window.onload = () => {
    var warmth = document.getElementById("obfuscate");
    console.log(warmth.innerHTML);
    obfuscate(warmth, warmth.innerHTML);
  };
})();
