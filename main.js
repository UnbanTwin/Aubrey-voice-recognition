//change this if we have longer commands
annyang.start({continuous: false});

function save_data(){
var input = document.getElementById("fname");
localStorage.setItem("fname", input.value);
}
var firstname = localStorage.getItem("fname");

annyang. addCallback('resultNoMatch', function(){speak('I dont know what you mean');  document.getElementById("#resultplace").innerHTML = "I dont know what you mean.";});
function speak (phrase) {
    var worte = new SpeechSynthesisUtterance(phrase);
    worte.lang = "en-GB";
    window.speechSynthesis.speak(worte);
}

// Just a list of functions that anyone can call
// you can call these in the console by typing actions.YourFunctioName()
var actions = {

    youtube: function (term) {
        window.location.href = 'https://www.youtube.com/results?search_query='+term;
    },


    google: function (term) {
        window.location.href = 'https://www.google.com/#q='+term;
    },
    d20: function () {
      var d20 = Math.floor(Math.random() * 20);
      speak(d20);
      document.getElementById("#resultplace").innerHTML = d20;
    },

    d6: function () {
      var d6 = Math.floor(Math.random() * 6);
      speak(d6);
      document.getElementById("#resultplace").innerHTML = d6;
    },
  wolfram: function(term) {
    $.get("https://api.wolframalpha.com/v2/query?input="+term+"&appid=THYQLJ-3K45Y2A7W5"), function(wolfram__) {
        speak(wolfram__);
        };
    //http://api.wolframalpha.com/v2/query?input=pi&appid=XXXX
    //var wolfram_ = "http://api.wolframalpha.com/v2/query?input="+term+"&appid=THYQLJ-3K45Y2A7W5";
    //speak(wolfram_);
  },
  weather: function (term) {
    $.get('https://api.openweathermap.org/data/2.5/weather?q='+term, function (theweather) {
      speak(theweather.temp);





  });

},
howu: function () {
  speak("I'm good");
  document.getElementById("#resultplace").innerHTML = "I'm good, thank you";


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
        '(hello)(hi)(hey)': function() {
            speak('hello ');
            document.getElementById("#resultplace").innerHTML = "hello ";
        },

        '(Who made you)(Who created you)': function() {
            speak('sam bolton');
            document.getElementById("#resultplace").innerHTML = "sam bolton";
        },
        '(hey aubrey)(aubrey) (ok aubrey)': function() {
            speak('Ready, sir');
            document.getElementById("#resultplace").innerHTML = "Ready, sir";

        },
        '(thats good) (that is good)': function() {
            speak('good');
            document.getElementById("#resultplace").innerHTML = "good";
          },
        '(shutup) (shut up) (pause) (be quit) (go to sleep) (stop)': function() {
            annyang.pause();
            annyang.removeCommands();
            annyang.addCommands(commands2);
            annyang.resume();
            document.getElementById("#resultplace").innerHTML = "Paused";
        },

        '(hey aubrey can you) (can you) youtube *term': actions.youtube,
        'search *term': actions.search,
        '(hey aubrey can you) (can you) google *term': actions.google,
        'roll a d20': actions.d20,
        'roll a d6': actions.d6,
        'What is *term': actions.wolfram,
        'what is the weather in *term': actions.weather,
        '(How are you) (you good) (are you alright)': actions.howu,

    };
var commands2 = {
  //this is for the pause function only!
  '(wake up)(resume)(aubry wakeup)(start)': function() {
    annyang.pause();
    annyang.removeCommands();
    annyang.addCommands(commands);
    annyang.resume();
    document.getElementById("#resultplace").innerHTML = "Resumed";
  }




}
    // take our list of commands and stick them all in
    annyang.addCommands(commands);
}
