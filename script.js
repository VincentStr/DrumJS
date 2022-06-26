window.addEventListener('keydown', function (event) {

    const key = event.key.toLowerCase();
    if (key == "q") {
      heat1()
    }
    if (key == "w") {
      heat2()
    }
    if (key == "e") {
      heat3()
    }
    if (key == "a") {
      heat4()
    }
    if (key == "s") {
      clap()
    }
    if (key == "d") {
      openHH()
    }
    if (key == "z") {
      kickHat()
    }
    if (key == "x") {
      kick()
    }
    if (key == "c") {
      closedHH()
    }
  });
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  
  output.innerHTML = slider.value; // Display the default slider value
  
  // Update the current slider value (each time you drag the slider handle)
  var volume = 0.5;
  slider.oninput = function () {
    output.innerHTML = this.value;
    volume = this.value / 100
  }
  function heat1() {
    var audio = document.getElementById("Q");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Heater-1";
  }
  function heat2() {
    var audio = document.getElementById("W");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Heater-2";
  }
  function heat3() {
    var audio = document.getElementById("E");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Heater-3";
  }
  function heat4() {
    var audio = document.getElementById("A");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Heater-4";
  }
  function clap() {
    var audio = document.getElementById("S");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Clap";
  }
  function openHH() {
    var audio = document.getElementById("D");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Open-HH";
  }
  function kickHat() {
    var audio = document.getElementById("Z");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Kick-n'-Hat";
  }
  function kick() {
    var audio = document.getElementById("X");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Kick";
  }
  function closedHH() {
    var audio = document.getElementById("C");
    audio.play();
    audio.volume = volume;
    document.querySelector("#display").innerHTML = "Closed-HH";
  }