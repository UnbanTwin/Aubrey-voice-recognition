
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
    search: function (term) {
        // window.location go to google?
    },
    google: function (term) {
        window.location.href = 'https://www.google.com/#q='+term;
    }
}
function On() {
    speak("now listening")
}
// bind all of our spoken commands to the actions
if (annyang) {
    annyang.setLanguage('en-GB');

    // Define the triggers for the commands
    var commands = {
        'hello (who are you)': function() {
            speak('hello, I am aubrey');
        },
        '(aubrey) Who made you': function() {
            speak('sam bolton');
        },
        'youtube *term': actions.youtube,
        'search *term': actions.search,
        'google $term': actions.google
    };

    // take our list of commands and stick them all in
    annyang.addCommands(commands);
}
