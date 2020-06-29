(function () {
   var names = ["Yaakov", "Jenny", "Jen", "Jason", "Jacky", "Frank", "Henry", "Laura", "Jim"];
   for (var name in names) {
      var firstLetter = names[name].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();
