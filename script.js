var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Show/hide the scroll to top button
window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 250) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Responsive slidebar Menu
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
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
    
        // Vérifier si l'élément cliqué est en dehors de la barre de navigation
        if (!targetElement.closest('#header')) {
            // Masquer la barre de navigation et l'icône de fermeture
            nav.classList.remove('active');
            close.style.display = 'none';
        }
    });
}

// Dark mode
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
