const bootScreen = document.getElementById("bootScreen");
const lab = document.getElementById("lab");

const enterLabButton = document.getElementById("enterLabButton");
const viewProjectsButton = document.getElementById("viewProjectsButton");


// =========================================
// ENTER THE LAB
// =========================================

enterLabButton.addEventListener("click", () => {

    bootScreen.classList.add("boot-exit");

    setTimeout(() => {

        bootScreen.style.display = "none";

        lab.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 700);

});


// =========================================
// VIEW PROJECTS
// =========================================

viewProjectsButton.addEventListener("click", () => {

    const projectsSection = document.getElementById("projects");

    projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});