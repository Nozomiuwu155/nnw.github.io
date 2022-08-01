//var myHeading = document.querySelector('h1');
//myHeading.textContent = '長尾謙杜';

//alert('長尾謙杜大好き');

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/kento_o3o.jpg') {
      myImage.setAttribute ('src','image/kento_wara.jpg');
    } else {
      myImage.setAttribute ('src','image/kento_o3o.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('p');

/*function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}*/