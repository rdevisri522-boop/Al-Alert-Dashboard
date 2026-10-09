document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Alert Dashboard loaded successfully");

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening: " + link.textContent);
        });
    });

});