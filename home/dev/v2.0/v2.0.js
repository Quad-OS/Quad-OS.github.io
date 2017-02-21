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
