//Responsive slidebar Menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar && close) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        close.style.display = 'block';
    });

    close.addEventListener('click', () => {
        nav.classList.remove('active');
        close.style.display = 'none';
    });
}

//Dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var isDarkMode = body.classList.contains("dark-mode");
    saveDarkModePreference(isDarkMode);
}
  
function saveDarkModePreference(isDarkMode) {
    localStorage.setItem("darkMode", isDarkMode);
}
  
function loadDarkModePreference() {
    var isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}
  
// Load the dark mode preference when the page loads
window.addEventListener("load", loadDarkModePreference);
