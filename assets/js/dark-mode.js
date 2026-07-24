document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    // 1. Check local storage for existing preference
    const currentTheme = localStorage.getItem("theme");
    
    // 2. Check if the user's operating system is set to dark mode
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // 3. Apply dark mode if they explicitly saved it, OR if they have no saved preference AND their system is dark
    if (currentTheme === "dark" || (currentTheme === null && systemPrefersDark)) {
        body.classList.add("dark-mode");
        themeToggleBtn.innerHTML = '<i class="fa fa-sun-o"></i> Light Mode';
    }

    // Toggle event listener
    themeToggleBtn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        let theme = "light";
        
        if (body.classList.contains("dark-mode")) {
            theme = "dark";
            themeToggleBtn.innerHTML = '<i class="fa fa-sun-o"></i> Light Mode';
        } else {
            themeToggleBtn.innerHTML = '<i class="fa fa-moon-o"></i> Dark Mode';
        }
        
        // Save preference to local storage
        localStorage.setItem("theme", theme);
    });
});