export function darkMode(htmlElement) {
    if (htmlElement.classList.value === 'dark') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
    }
    localStorage.setItem('theme', htmlElement.classList.value);
}