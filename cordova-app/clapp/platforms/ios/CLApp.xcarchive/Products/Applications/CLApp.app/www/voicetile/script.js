//variable to control number of times speech recog results ar examined. Once correct answer found set to false to avoid repeats
let onetime = true;
let wordList = ['tin', 'tan', 'ten'];
let correctPhraseIndex = 0;
let incorrectPhraseIndex = 0;
let nextWordIndex = -1;
let quiz;
let hints;
let nickname = 'John';

function loadFirstWord() {
    quiz = getUrlValue('quiz');
    hints = document.querySelector('.hints');
    hints.innerHTML = quiz;
}//EO loadFirstWord()

function getUrlValue(varSearch) {
    var searchString = window.location.search.substring(1);
    var variableArray = searchString.split('&');
    for (var i = 0; i < variableArray.length; i++) {
        var keyValuePair = variableArray[i].split('=');
        if (keyValuePair[0] == varSearch) { return keyValuePair[1]; }
    }
}//EO getUrlValue()

function playCorrect() {
    document.getElementById('response-correct-wrapper').className = 'correct-active';
    setTimeout(hideCorrect, 3000);
}

function hideCorrect() {
    document.getElementById('response-correct-wrapper').className = 'reverse-correct-active';
}

function speakFeedback(feedback, callback) {
    TTS.speak({
        text: feedback,
        locale: 'en-GB',
        rate: 1
    }, function () {
        console.log('TTS confirmed correct');
        callback();
    }, function (reason) {
        console.log(reason);
    });
}//EO speakFeedback()

function loadNextWord() {
    if (nextWordIndex < wordList.length - 1) {
        nextWordIndex++;
        quiz = wordList[nextWordIndex];
        hints.innerHTML = quiz;
        //auto switch on mic listening
        startPressed();
    } else {
        hints.innerHTML = '...';
        document.getElementById('instruct').innerHTML = 'Exercise completed.'
        let callback = () => { setTimeout(() => { window.location.assign("../index.html"); }, 2000) }
        speakFeedback("Well done " + nickname + ", that's this exercise completed, you have answered all the words", callback);
    }
}//EO loadNextWord()

function loadSameWord() {
    startPressed();
}//EO loadNextWord()

function stopPressed() {
    modifyBodyBgColor('#e4e4e4');
    window.plugins.speechRecognition.stopListening(
        () => { console.log('Stopped Success'); }, () => { console.log('Stopped Error'); });
}//EO stopPressed()

function examineMatches(matches) {
    console.log(matches[0].toLowerCase());
    let words = matches[0].split(' ');
    modifyBodyBgColor(words[words.length - 1]);
    // if (matches[0].toLowerCase().indexOf(quiz) > -1) {
    //     if (onetime == true) {
    //         onetime = false;
    //         stopPressed();
    //         //playCorrect();
    //         let correctPhrases = [
    //             { phrase: 'Well done, you answered with the word, ' + quiz },
    //             { phrase: 'Correct, ' + quiz + ' was the word displayed' },
    //             { phrase: 'That is right, the word was ' + quiz }
    //         ];
    //         speakFeedback(correctPhrases[correctPhraseIndex].phrase, loadNextWord);
    //         (correctPhraseIndex < correctPhrases.length - 1) ? correctPhraseIndex++ : correctPhraseIndex = 0;
    //     }
    // } else {
    //     if (onetime == true) {
    //         onetime = false;
    //         stopPressed();
    //         //playIncorrect();
    //         let incorrectPhrases = [
    //             { phrase: 'Sorry, that is not the right answer. Please try again' },
    //             { phrase: 'That\'s not correct, give it another go' },
    //             { phrase: 'Bugger, wrong again. Go on try again' }
    //         ];
    //         speakFeedback(incorrectPhrases[incorrectPhraseIndex].phrase, loadSameWord);
    //         (incorrectPhraseIndex < incorrectPhrases.length - 1) ? incorrectPhraseIndex++ : incorrectPhraseIndex = 0;
    //     }
    // }
}//EO examineMatches()

function modifyBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function startListening() {
    console.log('Permitted to listen');
    modifyBodyBgColor('lime');
    let options = {
        language: 'en-gb',
        matches: 1,
        showPartial: true
    }
    window.plugins.speechRecognition.startListening(examineMatches, (err) => { console.log(err) }, options);
}//EO startListening()

function requestPermission() {
    window.plugins.speechRecognition.requestPermission(
        () => { console.log('Requested Permission Success'); },
        () => { console.log('Requested Permission Error'); }
    );
}//EO requestPermission()

function checkIfHasPermission(available) {
    window.plugins.speechRecognition.hasPermission(startListening, requestPermission);
}//EO checkIfHasPermission()

function checkIfAvailable() {
    window.plugins.speechRecognition.isRecognitionAvailable(checkIfHasPermission, alertNotAvailable);
}//EO checkIfAvailable()

function alertNotAvailable() {
    alert('Your device does not support speech recognition');
}//EO alertNotAvailable()

function startPressed() {
    onetime = true;
    checkIfAvailable();
}//EO startPressed()

setTimeout(() => { speakFeedback('Say the words that you see below', startPressed) }, 1000);
setTimeout(loadFirstWord, 5000);