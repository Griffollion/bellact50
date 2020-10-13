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

  for(var i = 0; i <tapes.length; i++) {
    tapes[i].classList.add("hidden");
  }
  
}

function restoreTape() {
  console.log('Clicked')
  var tapes = document.querySelectorAll(".screen-2__wrapper");
  var container = document.querySelector(".container");
  var facts = document.querySelectorAll(".fact");

  container.classList.remove("fact-show");

  for(var i = 0; i <tapes.length; i++) {
    tapes[i].classList.remove("hidden");
  }

  for(var i = 0; i <facts.length; i++) {
    facts[i].classList.remove("slide-in-elliptic-top-fwd");
  }
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

for(var i = 0; i < frames.length; i++) {
  frames[i].addEventListener("click", function (el) {
    var frameToshow = el.target.getAttribute("data-target");
    hideTape();
      showFact(frameToshow);
  });

  // frames[i].addEventListener("touchend", function (el) {
  //   var frameToshow = el.target.getAttribute("data-target");
  //   hideTape();
  //     showFact(frameToshow);
  // });
}

for(var i = 0; i < backToTapeBtns.length; i++) {
  backToTapeBtns[i].addEventListener("click", function () {
    restoreTape();
  });
  // backToTapeBtns[i].addEventListener("touchend", function () {
  //   restoreTape();
  // });
}
