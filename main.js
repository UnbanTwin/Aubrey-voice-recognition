
function speak (phrase) {
    var worte = new SpeechSynthesisUtterance(phrase);
    worte.lang = "en-GB";
    window.speechSynthesis.speak(worte);
}
annyang. addCallback('resultNoMatch', function(){speak('I dont know what you mean'); });
// Just a list of functions that anyone can call
// you can call these in the console by typing actions.YourFunctioName()
var actions = {
    youtube: function (term) {
        window.location.href = 'https://www.youtube.com/results?search_query='+term;
    },
    search: function (term) {
        // window.location go to google?
    },
    google: function (term) {
        window.location.href = 'https://www.google.com/#q='+term;
    },
    d20: function () {
      var d20 = Math.floor(Math.random() * 20);
      speak(d20);
    },

    d6: function () {
      var d6 = Math.floor(Math.random() * 6);
      speak(d6);
      document.getElementById("#resultplace").innerHTML = d6;
    },
  wolfram: function(term) {
    $.get("http://api.wolframalpha.com/v2/query?input="+term+"&appid=THYQLJ-3K45Y2A7W5"), function(wolfram__) {
        speak(wolfram__);
        };
    //http://api.wolframalpha.com/v2/query?input=pi&appid=XXXX
    //var wolfram_ = "http://api.wolframalpha.com/v2/query?input="+term+"&appid=THYQLJ-3K45Y2A7W5";
    //speak(wolfram_);
  },

}
function on() {
    speak("now listening")
}



// bind all of our spoken commands to the actions
if (annyang) {
    annyang.setLanguage('en-GB');

    // Define the triggers for the commands
    var commands = {
        'hello (who are you)': function() {
            speak('hello,');
            document.getElementById("#resultplace").innerHTML = "hello";
        },
        '(aubrey) Who made you': function() {
            speak('sam bolton');
            document.getElementById("#resultplace").innerHTML = "sam bolton";
        },
        'youtube *term': actions.youtube,
        'search *term': actions.search,
        'google *term': actions.google,
        'roll a d20': actions.d20,
        'roll a d6': actions.d6,
        'What is *term': actions.wolfram,
    };

    // take our list of commands and stick them all in
    annyang.addCommands(commands);
}
