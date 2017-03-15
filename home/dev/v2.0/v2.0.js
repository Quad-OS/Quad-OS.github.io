function notifyBox() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    var notification = new Notification("Box does support saving files in its current version, but only up to 5 megabytes.");
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === "granted") {
        var notification = new Notification("Box does support saving files in its current version, but only up to 5 megabytes.");
      }
    });
  }
}
Notification.requestPermission().then(function(result) {
  console.log(result);
});

function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon
  }
  var n = new Notification(theTitle, options);
}

function notifyScribble() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    var notification = new Notification("Scribble does not support saving files in its current version.");
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission) {
      if (permission === "granted") {
        var notification = new Notification("Scribble does not support saving files in its current version.");
      }
    });
  }
}
Notification.requestPermission().then(function(result) {
  console.log(result);
});

function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon
  }
  var n = new Notification(theTitle, options);
}
var b = 0;
while (b < 1) {
  var boxStatus = 1;
    var boxes = document.querySelectorAll("input[type='checkbox']");
    for (var b = 0; i < boxes.length; b++) {
      var box = boxes[b];
      if (box.hasAttribute("store")) {
        setupBox(box);
    }

    function setupBox(box) {
      var storageId = box.getAttribute("store");
      var oldVal = localStorage.getItem(storageId);
      console.log(oldVal);
      box.checked = oldVal === "true" ? true : false;

      box.addEventListener("change", function() {
        localStorage.setItem(storageId, this.checked);
      });
    }
  }
  function boxNotAllowed() {
    document.getElementById("boxButton").style.visibility = "hidden";
    boxStatus = 0;

    function boxAllowed() {
      document.getElementById("boxButton").style.visibility = "visible";
      boxStatus = 1;
    }
  }
  b = b - 1;
}
