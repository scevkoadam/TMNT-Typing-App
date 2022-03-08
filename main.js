var playerArea = document.querySelector('#playerArea');
var playerBtn = document.querySelector('#playerBtn');
var comp1Area = document.querySelector('#comp1Area');
var comp1Btn = document.querySelector('#comp1Btn');
var comp2Area = document.querySelector('#comp2Area');
var comp2Btn = document.querySelector('#comp2Btn');
var comp3Area = document.querySelector('#comp3Area');
var comp3Btn = document.querySelector('#comp3Btn');
var startBtn = document.querySelector('#startBtn');
var infoDiv = document.querySelector('#info');
var texts = ["Danas je divan dan", "Sutra je divan dan", "Juce je bio divan dan", "Vazda divan dan"]
var rand;
var winner = 0;
var randomInterval;

startBtn.addEventListener('click', timer);

function timer() {
  var time = 3;
  startBtn.innerHTML = time;
  var loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time === 0) {
      clearInterval(loop);
      startBtn.style.display = "none";
      startTyping();
    }
  },1000)
}

function startTyping() {
  rand = Math.floor(Math.random()*texts.length);
  infoDiv.innerHTML = '<h3>'+texts[rand]+'</h3>'
  infoDiv.style.display = "block";
  playerArea.focus(); //cursor je automatski na playerArea
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
}

function playerStartTyping() {
  playerArea.addEventListener('keyup', function (e) {
    //console.log(this.value); //this se misli na playerArea
    if (e.keyCode === 13) { // when enter is pressed, enter ima numericki kod 13
      var userText = playerArea.value.trim(); // da ne racuna prazne prostore, inace ne radi
      if (userText == texts[rand]) {
        winner++;
        playerBtn.className = 'form-control btn btn-success';
        playerBtn.innerHTML = "Position: " + winner;
      } else{
        playerBtn.className = 'form-control btn btn-danger';
        playerBtn.innerHTML = "Wrong Typing";
      }
    }

  })
}

function comp1StartTyping() {
  randomInterval = 200 + Math.floor(Math.random()*100);
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    randomInterval = 200 + Math.floor(Math.random()*100);
    if (textArray.length != 0) {
      comp1Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp1Btn.className = 'form-control btn btn-success';
      comp1Btn.innerHTML = "Position: " + winner;
    }
  },randomInterval)
}

function comp2StartTyping() {
  randomInterval = 200 + Math.floor(Math.random()*100);
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    randomInterval = 200 + Math.floor(Math.random()*100);
    if (textArray.length != 0) {
      comp2Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp2Btn.className = 'form-control btn btn-success';
      comp2Btn.innerHTML = "Position: " + winner;
    }
  },randomInterval)
}

function comp3StartTyping() {
  randomInterval = 200 + Math.floor(Math.random()*100);
  var text = texts[rand];
  var textArray = text.split("");
  var loop = setInterval(function () {
    randomInterval = 200 + Math.floor(Math.random()*100);
    if (textArray.length != 0) {
      comp3Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp3Btn.className = 'form-control btn btn-success';
      comp3Btn.innerHTML = "Position: " + winner;
    }
  },randomInterval)
}
