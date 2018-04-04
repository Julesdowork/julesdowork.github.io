var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src', 'images/chrome-logo.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Welcome back, " + myName;

    
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome back, " + storedName;
}

myButton.onclick = function() {
    setUserName();
}