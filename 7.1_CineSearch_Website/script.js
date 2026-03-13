import { darkMode } from "./darkMode.js";
import typeWriterAnimation from "./typeWriterAnimation.js";

console.log(`Welcome!!!CineSearch!!!`);
typeWriterAnimation();
const darkModeBtn = document.querySelector('#theme-toggle-btn');
const htmlElement = document.querySelector('html');


darkModeBtn.addEventListener('click', () => darkMode(htmlElement));
