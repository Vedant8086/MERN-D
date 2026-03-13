import { darkMode } from "./darkMode.js";

console.log(`Welcome!!!CineSearch!!!`);

const darkModeBtn = document.querySelector('#theme-toggle-btn');
const htmlElement = document.querySelector('html');

const theme = localStorage.getItem('theme') || 'dark';
htmlElement.classList.add(theme);

darkModeBtn.addEventListener('click', () => darkMode(htmlElement));
