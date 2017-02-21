var keytermm = "asd";
var answerd = "asd";

function readMultipleFiles(evt) {
  var files = evt.target.files;
  if (files) {
    for (var i = 0, f; f = files[i]; i++) {
      var r = new FileReader();
      r.onload = (function(f) {
        return function(e) {
          var contentsd = e.target
            .result;
          alert(contentsd);
          var array = contentsd
            .split(',');
          keytermm = array.slice(
            0, (array.length /
              2));
          answerd = array.slice(
            (array.length / 2),
            array.length);
        };
      })(f);
      r.readAsText(f);
    }
  } else {
    alert("Failed to load files");
  }
}
document.getElementById('fileinput').addEventListener(
  'change', readMultipleFiles, false);
var audio;
var das = 0;
var c = document.getElementById(
  "myCanvas");
var ctx = c.getContext("2d");

function startDictation() {
  if (window.hasOwnProperty(
      'webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults =
      false;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function(e) {
      document.getElementById('uq')
        .value = e.results[0][0].transcript;
      recognition.stop();
      var u = document.getElementById(
        'uq').value;
      document.getElementById('uq')
        .value = u;
      question();
    };
    recognition.onerror = function(e) {
      window.alert("err");
      recognition.stop();
    }
  }
}

function wow() {
  var sounds = document.getElementsByTagName(
    'audio');
  for (i = 0; i < sounds.length; i++)
    sounds[i].pause();
};
var ng = 0;

function question() {
  var aodio = das % 10;
  audio = new Audio("snd" + aodio +
    '.mp3');
  audio.load();
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (document.getElementById('uq').value ==
    "/time") {
    window.alert("its " + hours + ":" +
      minutes);
  }
  if (document.getElementById('uq').value
    .indexOf("/music") > -1) {
    audio.pause();
    audio.currentTime = 0;
    window.alert("changing music..");
    das = document.getElementById(
      'uq').value.charAt(6);
    window.alert(
      "soundtrack is now soundtrack " +
      das % 10);
    audio.pause();
    return;
  }
  if (document.getElementById('uq').value ==
    "/clear") {
    localStorage.clear();
    window.alert(
      "loacal storage cleared");
    return;
  }
  audio.pause();
  audio.currentTime = 0.0;
  var empty = [];
  var i = 0;
  var greeting_results = "";
  var found = false;
  var greetingWords = ["hello box",
    "hi box", "good morning box",
    "good evening box",
    "good night box"
  ];
  var fivequestions = [];
  var result = [];
  wow();

  function greeting(wordlist, main,
    resultlist, different) {
    empty = [];
    i = 0;
    greeting_results = main.join(
      " ");
    while (i <= greeting_results.length) {
      if (greeting_results.indexOf(
          wordlist[i]) > -1) {
        result = [ /*wordlist[i]*/
          "Hello" +
          " to you also!",
          "I'm good!",
          "I dont know how",
          "Im box, your personal assistant",
          "I don't know who they are",
          "I dont know your name, but I know your my friend :)",
          "I dont know who",
          "use /time to find the time",
          "Bored? do /game to play our game",
          "Did I hear the word game? I love games! do /game to play our featured game",
          "I don't know when"
        ]
        if ((greeting_results[
              greeting_results.indexOf(
                wordlist[i]) - 1] ==
            " " || greeting_results
            .indexOf(wordlist[i]) -
            1 < 0) && (
            greeting_results[
              greeting_results.indexOf(
                wordlist[i]) +
              wordlist[i].length] ==
            " " || greeting_results
            .indexOf((wordlist[i]) +
              wordlist[i].length) <
            0)) {
          if (different == 1) {
            window.alert(result[
              resultlist + i]);
            responsiveVoice.speak(
              result[resultlist +
                i])
          } else {
            window.alert(result[
              resultlist]);
            responsiveVoice.speak(
              result[resultlist])
          }
          empty.push(main[i]);
          found = true;
          break;
        }
      }
      i = i + 1;
    }
  }
  var v = "";
  var str = document.getElementById(
    'uq').value;
  str = str.toLowerCase();
  var charactder = "";
  var j = 0;
  var calc = "";
  var userQ = [];
  var countwords = 0;
  var n = str.length;
  var z = "";
  var character = "";
  while (j <= n) {
    if (str.charAt(j) == " " || n ==
      j || str.charAt(j) == "/" ||
      str.charAt(j) == "*" || str.charAt(
        j) == "-" || str.charAt(j) ==
      "+") {
      if (countwords === "") {
        z = z + "First word/ " +
          charactder;
        userQ.push(charactder);
        charactder = '';
        countwords++;
      } else {
        z = z + " // " + charactder;
        if (str.charAt(j) == "/" ||
          str.charAt(j) == "*" || str
          .charAt(j) == "-" || str.charAt(
            j) == "+") {
          userQ.push(charactder);
          charactder = str.charAt(j);
          userQ.push(charactder);
          countwords++;
        } else {
          userQ.push(charactder);
        }
        charactder = '';
        countwords++;
      }
    } else {
      charactder = charactder + str.charAt(
        j);
    }
    j++;
  }
  if (userQ.indexOf("/") != -1 ||
    userQ.indexOf("*") != -1 || userQ
    .indexOf("-") != -1 || userQ.indexOf(
      "+") != -1) {
    calc = eval(str);
    window.alert(calc);
  }
  var listdata = [];
  var ansdata = [];
  if (localStorage.ansdata) {
    window.alert("answer AI loaded!");
    var test2 = localStorage.getItem(
      "listdata");
    listdata = JSON.parse(test2);
    test2 = localStorage.getItem(
      "ansdata");
    ansdata = JSON.parse(test2);
  } else {
    window.alert(
      "No answer AI in local storage. creating one.."
    );
    localStorage.setItem("listdata",
      JSON.stringify(listdata));
    localStorage.setItem("ansdata",
      JSON.stringify(ansdata));
    var test2 = localStorage.getItem(
      "listdata");
    listdata = JSON.parse(test2);
    test2 = localStorage.getItem(
      "ansdata");
    ansdata = JSON.parse(test2);
  }
  var zeta = userQ.join(" ");
  var reedy;
  if (zeta == ".clr") {
    if (listdata.length != 0) {
      reedy = prompt(
        "are you sure? the things you going to delete are : " +
        listdata[listdata.length -
          1] +
        " as the keyterm and " +
        ansdata[ansdata.length - 1] +
        " as the answer. Say yes or no "
      )
      if (reedy = "yes") {
        ansdata.pop();
        listdata.pop();
        localStorage.setItem(
          "listdata", JSON.stringify(
            listdata));
        localStorage.setItem(
          "ansdata", JSON.stringify(
            ansdata));
        return;
      } else {
        window.alert(
          "deletion canceled");
        return;
      }
    } else {
      window.alert("error: empty");
      localStorage.clear();
      return;
    }
  }
  if (zeta == ".download") {
    var textToSave = listdata.concat(
      ansdata);
    var hiddenElement = document.createElement(
      'a');
    hiddenElement.href =
      'data:attachment/text,' +
      encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download =
      'localStorage.txt';
    hiddenElement.click();
    return;
  }
  if (zeta == ".replace" && keytermm !==
    "asd") {
    var replaceLocal = prompt(
      "are you sure you want to replace localstorage?"
    );
    if (replaceLocal == "yes") {
      localStorage.clear();
      ansdata = answerd;
      listdata = keytermm;
      localStorage.setItem("listdata",
        JSON.stringify(listdata));
      localStorage.setItem("ansdata",
        JSON.stringify(ansdata));
      return;
    } else {
      window.alert("canceled");
      return;
    }
  }
  if (zeta == ".add" && keytermm !==
    "asd") {
    var replaceLocal = prompt(
      "are you sure you want to add localstorage?"
    );
    if (replaceLocal == "yes") {
      localStorage.clear();
      ansdata = ansdata.concat(
        answerd);
      listdata = listdata.concat(
        keytermm);
      localStorage.setItem("listdata",
        JSON.stringify(listdata));
      localStorage.setItem("ansdata",
        JSON.stringify(ansdata));
      return;
    } else {
      window.alert("canceled");
      return;
    }
  }
  greeting(greetingWords, userQ, 0, 0);
  if (found == false) {
    i = 0;
    while (i < listdata.length) {
      if (zeta.indexOf(listdata[i]) !==
        -1) {
        window.alert(ansdata[i]);
        responsiveVoice.speak(ansdata[
          i]);
        found = true;
        break;
      }
      i++;
    }
  }
  if (found == false) {
    var ask = prompt(
      "Please enter what i was supposed to say, or you can leave it blank"
    );
    if (ask !== null && ask != "") {
      var keywerd = prompt(
        "Please key words");
      keywerd = keywerd.toLowerCase();
      ask = ask.toLowerCase();
      ansdata.push(ask);
      listdata.push(keywerd);
      localStorage.setItem("listdata",
        JSON.stringify(listdata));
      localStorage.setItem("ansdata",
        JSON.stringify(ansdata));
    } else {
      window.alert(
        "its ok if youre shy :)");
    }
  }
  audio.pause();
  audio.play();
}
