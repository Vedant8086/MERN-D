export function darkMode(htmlElement) {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
    if (htmlElement.classList.value === 'dark') {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
    } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
    }
    localStorage.setItem('theme', htmlElement.classList.value);
}