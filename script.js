// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Toggle Dark/Light Theme
const themeToggleButton = document.createElement('button');
themeToggleButton.innerText = "🌙 Toggle Theme";
themeToggleButton.style.position = "fixed";
themeToggleButton.style.top = "20px";
themeToggleButton.style.right = "20px";
themeToggleButton.style.backgroundColor = "#ff007f";
themeToggleButton.style.color = "#fff";
themeToggleButton.style.padding = "10px 15px";
themeToggleButton.style.border = "none";
themeToggleButton.style.borderRadius = "5px";
themeToggleButton.style.cursor = "pointer";
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Change the button text based on theme
    if (document.body.classList.contains('dark-theme')) {
        themeToggleButton.innerText = "🌞 Light Theme";
        document.body.style.background = 'linear-gradient(135deg, #2d3e50, #1b2631)';
        document.body.style.color = '#fff';
    } else {
        themeToggleButton.innerText = "🌙 Dark Theme";
        document.body.style.background = 'linear-gradient(135deg, #ff007f, #7f00ff)';
        document.body.style.color = '#fff';
    }
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = "⬆️ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.backgroundColor = "#7f00ff";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.padding = "15px 20px";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.fontSize = "20px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none";
document.body.appendChild(scrollToTopButton);

// Show or Hide the Scroll to Top Button based on the scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to Top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
