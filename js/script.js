```javascript
// VALO Community - Main JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Add active navigation state when clicking links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});
```

