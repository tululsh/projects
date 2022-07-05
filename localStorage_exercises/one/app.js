// CREAT//
// <!-- exercise one -->

// let inputOne = document.querySelector('.inputName');
// let inputTwo = document.querySelector('.inputLast');
// let btnSubmit = document.querySelector('.btnSubmit');
// let btnClear = document.querySelector('.btnClear');


// // <!-- exercise two -->
// let inputThree = document.querySelector('.inputGender');
// let inputFour = document.querySelector('.inputAddress');
// let inputFive = document.querySelector('.inputEmail');
// let inputSix = document.querySelector('.inputAge');

// // function localstorage//
// function getInformation() {
// // <!-- exercise one -->
//     // JSON.Stringify//
//     // inputOne//
//     let translatedInformationOne = JSON.stringify(inputOne.value);
//     localStorage.setItem('inputName', translatedInformationOne);
//     // inputTwo//
//     let translatedInformationTwo = JSON.stringify(inputTwo.value);
//     localStorage.setItem('inputLast', translatedInformationTwo);

//     // JSON.parse//
//     // inputOne//
//     let mainDatabaseOne = localStorage.getItem('inputName');
//     parsedDatabaseOne = JSON.parse(mainDatabaseOne);
//     // inputTwo//
//     let mainDatabaseTwo = localStorage.getItem('inputLast');
//     parsedDatabaseTwo = JSON.parse(mainDatabaseTwo);

//     // <!-- exercise two -->
//       // JSON.Stringify//
//     // inputThree//
//     let translatedInformationThree = JSON.stringify(inputThree.value);
//     localStorage.setItem('inputGender', translatedInformationThree);
//     // inputFour//
//     let translatedInformationFour = JSON.stringify(inputFour.value);
//     localStorage.setItem('inputAddress', translatedInformationFour);
//  // inputFive//
//  let translatedInformationFive = JSON.stringify(inputFive.value);
//  localStorage.setItem('inputEmail', translatedInformationFive);
//      // inputSixs//
//      let translatedInformationSixs = JSON.stringify(inputSix.value);
//      localStorage.setItem('inputAge', translatedInformationSixs);
 
//     // JSON.parse//
//     // inputThree//
//     let mainDatabaseThree = localStorage.getItem('inputGender');
//     parsedDatabaseThree = JSON.parse(mainDatabaseThree);
//     // inputFour//
//     let mainDatabaseFour = localStorage.getItem('inputAddress');
//     parsedDatabaseFour = JSON.parse(mainDatabaseFour);
//     // inputFive//
//     let mainDatabaseFive = localStorage.getItem('inputEmail');
//     parsedDatabaseFive = JSON.parse(mainDatabaseFive);
//     // inputSixs//
//     let mainDatabaseSixs = localStorage.getItem('inputAge');
//     parsedDatabaseSixs = JSON.parse(mainDatabaseSixs);
// }
// btnSubmit.addEventListener('click', getInformation);

// // function clear//
// function clearInformation(){
// localStorage.clear();
// }
// btnClear.addEventListener('click', clearInformation);


// <!-- exercise three -->
// creat //
// let btnGuss = document.querySelector('.btnGuss');
// let feedback = document.querySelector('.feedback');

// let number = Math.floor(Math.random() * 10) + 1

// function checkGuess() {
//   let input = document.getElementById('guess').value;
// //   JSON.stringify+JSON.parse//
//   let translatedNumberOne = JSON.stringify(guess.value);
//   localStorage.setItem('input', translatedNumberOne);
//   let mainNumberOne = localStorage.getItem('input');
//    parsedNumberOne = JSON.parse(mainNumberOne);
//   if (input == number) {
//     feedback.textContent = `You got it right!`
//   } else if (input > number) {
//     feedback.textContent = "That's too high. Try Again!"
//   } else if (input < number) {
//    feedback.textContent = " That's too low. Try Again!"
//  }
// }
// btnGuss.addEventListener('click', checkGuess)

// <!-- exercise four -->
// creat //
// let btnGussTwo = document.querySelector('.btnGussTwo');
// let btnStart = document.querySelector('.btnStart');
// let feedbackOne = document.querySelector('.feedbackOne');
// let feedbackTwo = document.querySelector('.feedbackTwo');

// let number = Math.floor(Math.random() * 10) + 1

// function playersGuess(){
//   let inputOne = document.getElementById('guessOne').value;
//   let inputTwo = document.getElementById('guessTwo').value;
// //   JSON.stringify+JSON.parse//
//   let translatedNumberTwo = JSON.stringify(guessOne.value);
//   localStorage.setItem('inputOne', translatedNumberTwo);
//   let translatedNumberThree = JSON.stringify(guessTwo.value);
//   localStorage.setItem('inputTwo', translatedNumberThree);

//   let mainNumberTwo = localStorage.getItem('inputOne');
//    parsedNumberTwo = JSON.parse(mainNumberTwo);
//    let mainNumberThree = localStorage.getItem('inputTwo');
//    parsedNumberThree = JSON.parse(mainNumberThree);

//   if (inputOne && inputTwo == number) {
//     feedbackOne.innerHTML= `You got it right!`
//     feedbackTwo.innerHTML= `You got it right!`
//   } else if (inputOne && inputTwo > number) {
//     feedbackOne.innerHTML= "That's too high. Try Again!"
//     feedbackTwo.innerHTML= "That's too high. Try Again!"
//   } else if (inputOne && inputTwo < number) {
//    feedbackOne.innerHTML= "That's too low. Try Again!"
//    feedbackTwo.innerHTML= "That's too low. Try Again!"
//  }
// }
// btnGussTwo.addEventListener('click', playersGuess);

// // // function clear//
// function startOver(){
// localStorage.clear();
// }
// btnStart.addEventListener('click', startOver);

