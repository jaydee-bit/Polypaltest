//for login
function login(){
    let user = document.getElementById("username-login").value;
    let pass = document.getElementById("password").value;

    if (user !== "" && pass !== ""){
        window.location.href = "getstarted.html";
    }
    else{

    }
}
function signup(){
    let email = document.getElementById("username-signup").value;
    let user = document.getElementById("username-signup").value;
    let pass = document.getElementById("password").value;
    let confpass = document.getElementById("confirmpass").value;

    if (email !== "" && user !== "" && pass !== "" && confpass !==""){
        window.location.href = "getstarted.html";
    }
    else{

    }
}

function next1() {
  // get selected radio
  let selected = document.querySelector('input[name="language"]:checked');

  if (selected) {
    switch (selected.value) {
      case "English":
      case "Spanish":
      case "Chinese":
      case "Bengali":
      case "Portuguese":
        location.href = "selectregion.html";
        break;

      default:
        reminder.textContent = "Please select a language before continuing!";
    }
  } else {
    reminder.textContent = "Please select a language before continuing!";
  }
}


function next2() {
  let selected = document.querySelector('input[name="region"]:checked');
  

  if (selected) {
    switch (selected.value) {
      case "Philippines":
      case "United-States":
      case "China":
      case "Brazil":
      case "India":
        location.href = "home.html";
        break;
      default:
        reminder.textContent = "Please select a region before continuing!";
    }
  } else {
    reminder.textContent = "Please select a region before continuing!";
  }
}

function next3() {
  // get selected radio
  let selected = document.querySelector('input[name="language"]:checked');

  if (selected) {
    switch (selected.value) {
      case "English":
        location.href = "matchword.html";
        break;
      case "Spanish":
        location.href = "matchwordspanish.html";
        break;
      case "Chinese":
        location.href = "matchwordchinese.html";
        break;
      case "French":
        location.href = "matchwordfrench.html";
        break;

      default:
        reminder.textContent = "Please select a language before continuing!";
    }
  } else {
    reminder.textContent = "Please select a language before continuing!";
  }
}
function next4() {
  // get selected radio
  let selected = document.querySelector('input[name="language"]:checked');

  if (selected) {
    switch (selected.value) {
      case "English":
        location.href = "flashcard.html";
        break;
      case "Spanish":
        location.href = "flashcardspanish.html";
        break;
      case "Chinese":
        location.href = "flashcardchinese.html";
        break;
      case "French":
        location.href = "flashcardfrench.html";
        break;

      default:
        reminder.textContent = "Please select a language before continuing!";
    }
  } else {
    reminder.textContent = "Please select a language before continuing!";
  }
}

function toChat(){
  location.href = "chats.html";
}

function logout(){
  location.href = "polypal.html";
}

function play1(){ //word match
  location.href = "selectlanguagetolearnformatchword.html";
}

function play2(){ //for flashcards
  location.href = "selectlanguagetolearnforflashcards.html";
}
function play3(){ //for pronounciation pract
  location.href = "pronounciation.html";
}
function correctAns(){
  let result = document.getElementById("result");
  result.textContent = "Correct!";
  result.style.color = "rgb(6, 182, 6)"; 
}
function wrongAns(){
  let result = document.getElementById("result");
  result.textContent = "Wrong!";
  result.style.color = "red"; 
}

// Select all flashcards
const flashcards = document.querySelectorAll('.flashcard');

// Add click event for each card
  flashcards.forEach(card => {
    card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    });
});

function toProfile(){
  location.href = "profile.html";
}