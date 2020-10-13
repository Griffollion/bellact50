function init() {
  var container = document.querySelector(".container");
  container.classList.add("active");
  setTimeout(function() {
      var screen1 = document.querySelector('.screen-1');
      var screen2 = document.querySelector('.screen-2');
      screen1.classList.add('disactive');
      screen2.classList.add('active');
  },2000)
}

function hideTape() {
  var tapes = document.querySelectorAll(".screen-2__wrapper");
  var container = document.querySelector(".container");
  var cursor = document.querySelector(".screen-2__cursor");

  cursor.classList.add('hidden');
  container.classList.add("fact-show");
  tapes.forEach(function(el) {
    el.classList.add("hidden");
  })
  
}

function restoreTape() {
  var tapes = document.querySelectorAll(".screen-2__wrapper");
  var container = document.querySelector(".container");
  var facts = document.querySelectorAll(".fact");

  container.classList.remove("fact-show");
  tapes.forEach(function(el) {
    el.classList.remove("hidden");
  })

  facts.forEach(function (el) {
    el.classList.remove("slide-in-elliptic-top-fwd");
  });
}

function showFact(target) {
  var tgt = document.querySelector("." + target);

  tgt.classList.add("slide-in-elliptic-top-fwd");
}

var frames = document.querySelectorAll(".frame");
var backToTapeBtns = document.querySelectorAll("[data-js='back-to-tape']");

window.addEventListener("load", function () {
  init();
});

frames.forEach(function (el) {
  el.addEventListener("click", function (el) {
    var frameToshow = el.target.getAttribute("data-target");
    hideTape();
      showFact(frameToshow);
  });

  el.addEventListener("touchstart", function (el) {
    var frameToshow = el.target.getAttribute("data-target");
    hideTape();
      showFact(frameToshow);
  });
});

backToTapeBtns.forEach(function (el) {
  el.addEventListener("click", function () {
    restoreTape();
  });
  el.addEventListener("touchstart", function () {
    restoreTape();
  });
});
