document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("themeToggle");
    const body = document.body;
    const icon = themeToggleBtn.querySelector("i");

    // Check local storage for existing preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
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