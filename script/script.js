let mobileNavBtn = document.getElementById("mobile-nav-btn");
let nav3 = document.getElementById("nav3");

mobileNavBtn.addEventListener('click', function() {
    // toggle nav3
    nav3.classList.toggle("active");
});

window.addEventListener('resize', function() {
    // if menu is active, close the menu automatically when switched to desktop version
    if (window.innerWidth >= 780) {
        nav3.classList.remove('active');
    }
});
