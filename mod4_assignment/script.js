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
  var helloSpeaker = {};
  helloSpeaker.name = names[0];
  var speakWord = "Hello";
  helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  };
  window.helloSpeaker = helloSpeaker;
})(window);
