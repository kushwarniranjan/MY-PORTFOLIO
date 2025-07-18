// function typing() {
//   const text = "I am NIRANJAN KUSHWAR";
//   const typingElement = document.getElementById("typing-text");
//   const typingDelay = 100;

//   typeText(text, typingElement, typingDelay);
// }
// const text = "Hi, I'm Niranjan Kushwar | Web Developer | Learner";
// let i = 0;

// function typing() {
//   if (i < text.length) {
//     document.getElementById("typewriter").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typing, 100);
//   }
// }
// typing();
// function typeText(text, typingElement, typingDelay) {
//   for (let i = 0; i < text.length; i++) {
//     setTimeout(() => {
//       typingElement.textContent += text.charAt(i);
//     }, typingDelay * i);
//   }
// }

const text1 = "Hi, I'm Niranjan Kushwar | Learner";
const text2 = "FRONT END & BACK END DEVELOPER |ソフトウェアエンジニア";

const typingDelay = 100; // delay between characters
const pauseDelay = 1000; // delay after full text

// Typing function for first element
function typeText(element, text, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeText(element, text, i + 1), typingDelay);
  } else {
    setTimeout(() => {
      element.textContent = "";
      typeText(element, text);
    }, pauseDelay);
  }
}

// Typing function for second element
function typeLoop(element, text, index = 0) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(() => typeLoop(element, text, index + 1), typingDelay);
  } else {
    setTimeout(() => {
      element.textContent = "";
      typeLoop(element, text, 0);
    }, pauseDelay);
  }
}

// One clean DOMContentLoaded handler
document.addEventListener("DOMContentLoaded", () => {
  const el1 = document.getElementById("typewriter");
  const el2 = document.getElementById("typing");

  if (el1) {
    el1.textContent = "";
    typeText(el1, text1);
  }

  if (el2) {
    el2.textContent = "";
    typeLoop(el2, text2);
  }
});
