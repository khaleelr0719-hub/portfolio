// Show the current date and time on the home page
function showDateTime() {
    const dateTimeElement = document.getElementById("date-time");

    if (dateTimeElement) {
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }
}

// Show today's date on the resume page
function showTodayDate() {
    const dateElement = document.getElementById("today-date");

    if (dateElement) {
        dateElement.textContent = new Date().toLocaleDateString();
    }
}

// Change between light mode and dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".theme-button");

    if (button) {
        if (document.body.classList.contains("dark-mode")) {
            button.textContent = "Light Mode";
        } else {
            button.textContent = "Dark Mode";
        }
    }
}

// Scroll smoothly to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Display the current year in the footer
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Update the clock every second
showDateTime();
setInterval(showDateTime, 1000);

// Display the date on the resume page
showTodayDate();
