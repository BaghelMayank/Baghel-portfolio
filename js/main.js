const bootScreen = document.getElementById("bootScreen");
const lab = document.getElementById("lab");
const enterLabButton = document.getElementById("enterLabButton");


enterLabButton.addEventListener("click", () => {

    bootScreen.classList.add("boot-exit");

    setTimeout(() => {

        bootScreen.style.display = "none";

        lab.style.display = "block";

        window.scrollTo(0, 0);

    }, 700);

});