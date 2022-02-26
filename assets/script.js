var specChar = [
    '@',
    '%',
    '+',
    '!',
    '#',
    '$',
    '?'
];

var numberz = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var upperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var pwDisplayer = document.querySelector('#pwPrint');
var genButton = document.querySelector('#genBtn');

genButton.addEventListener("click", function () {
    var pwLength = parseInt(prompt("How long ya want yer password?!"));
    var special = confirm("Would you like Special Characters With that ?!?!");
    var upperz = confirm("Would you like UpperCase Characters With that ?!?!");
    var lowerz = confirm("Would you like LowerCase Characters With that ?!?!");
    var numz = confirm("Would you like numbers With that ?!?!");

    var finalPwChosenCharactersArrayMaker = [];
    if (special) {
        finalPwChosenCharactersArrayMaker = finalPwChosenCharactersArrayMaker.concat(specChar);
    }
    if (upperz) {
        finalPwChosenCharactersArrayMaker = finalPwChosenCharactersArrayMaker.concat(upperCase);
    }
    if (lowerz) {
        finalPwChosenCharactersArrayMaker = finalPwChosenCharactersArrayMaker.concat(lowerCase);
    }
    if (numz) {
        finalPwChosenCharactersArrayMaker = finalPwChosenCharactersArrayMaker.concat(numberz);
    }

    //    console.log(finalPwChosenCharactersArrayMaker);
    // var actualLengthOfPasswordRegardlessOfWhatTheUserSays = Math.floor(Math.random())

    var finalPwBossLvl99 = ""
    for (i = 0; i < pwLength; i++) {
        var rando = finalPwChosenCharactersArrayMaker[Math.floor(Math.random() * finalPwChosenCharactersArrayMaker.length)];
        finalPwBossLvl99 += rando;
    }
    console.log(finalPwBossLvl99);

    pwDisplayer.textContent = finalPwBossLvl99;

});

