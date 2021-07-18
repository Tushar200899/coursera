(function (window) {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];
  var byeSpeaker = {};
  byeSpeaker.name = names[0];
  var speakWord = "Good bye";
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);
