/**
 * nav-loader.js
 * Handles dynamic injection of Header and Footer for Gavin O'Hanlon's Portfolio
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inject Header HTML
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load header.html");
            return response.text();
        })
        .then(data => {
            // Insert the snippet into the <header id="header"> tag
            document.getElementById('header').innerHTML = data;

            // --- Handling the "Active" Page Link ---
            const currentPath = window.location.pathname.split("/").pop() || 'index.html';
            const navLinks = document.querySelectorAll('.navbar-nav a');
            
            navLinks.forEach(link => {
                link.parentElement.classList.remove('active');
                if (link.getAttribute('href') === currentPath) {
                    link.parentElement.classList.add('active');
                }
            });
        })
    .catch(err => console.error("Header Error:", err));

    // 2. Inject Footer HTML
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load footer.html");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.error("Footer Error:", err));

    // 3. Inject Modal HTML
    fetch('modal.html')
        .then(response => {
            if (!response.ok) throw new Error("Failed to load modal.html");
            return response.text();
        })
        .then(data => {
            // Insert the snippet into the <div id="modal-placeholder"> tag
            document.getElementById('modal-placeholder').innerHTML = data;
        })
        .catch(err => console.error("Modal Error:", err));
});