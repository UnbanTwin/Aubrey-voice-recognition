
function speak (phrase) {
    var worte = new SpeechSynthesisUtterance(phrase);
    worte.lang = "en-GB";
    window.speechSynthesis.speak(worte);
}

if (annyang) {
    annyang.setLanguage('en-GB');

    // Define your commands
    var commands = {
        'hello (who are you)': function() {
            speak('hello, I am aubrey')
        }
    };

    var commands2 = {
        '(aubrey) Who made you': function() {
            speak('sam bolton')
        }
    };

    var performSearch = function(term) {
       // Code to perform a search for the said 'term'
    }
    // Use addCommands API to add commands to annyang
    annyang.addCommands(commands);
    annyang.addCommands(commands2);
    // Start listening. You call this right here or do it later on some event like button click
}

function On() {
    var worte = new SpeechSynthesisUtterance("Now listening");
    worte.lang = "en-GB";
    window.speechSynthesis.speak(worte);
}

var commands = {
// saying 'search chrome bookmarks' will call 'performSearch' function with 'chrome bookmarks' as parameter
    'search *term': performSearch,
};

var performSearch = function(term) {
   // Code to perform a search for the said 'term'
}

if (annyang) {
    var commands3 = {
        'google *term': function(term) {
            window.location.href = 'https://www.google.com/#q='+term
        }
    }
}
annyang.addCommands(commands3);

if (annyang) {
    var commands8 = {
        'youtube *term': function(term) {
            window.location.href = 'https://www.youtube.com/results?search_query='+term
        }
    }
}
annyang.addCommands(commands8);
