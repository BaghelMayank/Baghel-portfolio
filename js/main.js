const bootScreen = document.getElementById("bootScreen");
const lab = document.getElementById("lab");

const enterLabButton = document.getElementById("enterLabButton");
const viewProjectsButton = document.getElementById("viewProjectsButton");

const projectDetail = document.getElementById("projectDetail");
const closeProject = document.getElementById("closeProject");


// =========================================
// PROJECT DATABASE
// =========================================

const projects = {

    particlefx: {

        type: "// UNITY ASSET STORE",

        title: "CUSTOM PARTICLE FX TOOL",

        subtitle:
            "A reusable 2D sprite-based particle effects tool for Unity.",

        about:
            "Designed and developed a reusable particle effects tool from concept to Asset Store release. The tool focuses on creating dynamic 2D sprite-based effects while maintaining compatibility across Unity rendering pipelines.",

        tech: [
            "UNITY",
            "C#",
            "PARTICLE SYSTEMS",
            "BUILT-IN",
            "URP",
            "HDRP",
            "UNITY 6"
        ],

        contributions: [
            "Tool architecture",
            "Particle effect system",
            "Editor workflow",
            "Multi-pipeline compatibility",
            "Testing and debugging",
            "Documentation",
            "Asset Store publishing"
        ],

        link: "https://assetstore.unity.com/packages/tools/particles-effects/customparticlefxtool-331646",
        linkText: "VIEW ON UNITY ASSET STORE"

    },


    spacequest: {

        type: "// 2D GAME",

        title: "SPACEQUEST",

        subtitle:
            "A playable 2D space shooter built with Unity.",

        about:
            "A complete 2D space shooter featuring player movement, projectile-based combat, enemies, health systems, environmental obstacles, VFX and game-state UI. The project was deployed as a WebGL game.",

        tech: [
            "UNITY",
            "C#",
            "2D",
            "WEBGL",
            "GAMEPLAY",
            "VFX"
        ],

        contributions: [
            "Player movement",
            "Projectile combat",
            "Enemy systems",
            "Health system",
            "Game-state flow",
            "UI",
            "WebGL deployment"
        ],

        link: "https://play.unity.com/en/games/0c940df3-7bfb-4c65-b935-8960541ffc14/spacequest",
        linkText: "PLAY GAME"

    },


    skydash: {

        type: "// MOBILE GAME",

        title: "SKYDASH",

        subtitle:
            "A complete 2D mobile game with monetization.",

        about:
            "A mobile-focused 2D Unity game featuring gameplay, scoring, UI and complete game flow. Integrated Google Mobile Ads for in-game monetization and tested the experience for mobile interaction.",

        tech: [
            "UNITY",
            "C#",
            "2D",
            "MOBILE",
            "ADMOB"
        ],

        contributions: [
            "Gameplay systems",
            "Scoring",
            "UI",
            "Game flow",
            "Mobile optimization",
            "AdMob integration"
        ],

        link: null

    },


    horror: {

        type: "// 3D GAME // WORK IN PROGRESS",

        title: "FIRST-PERSON HORROR",

        subtitle:
            "A modular first-person horror experience.",

        about:
            "A first-person horror game focused on exploration, environmental storytelling and reusable interaction systems. The project includes doors, switches, inspectable objects, flashlight interactions and atmospheric lighting.",

        tech: [
            "UNITY",
            "C#",
            "3D",
            "URP",
            "FPS",
            "INTERACTION SYSTEMS"
        ],

        contributions: [
            "First-person controller",
            "Interaction system",
            "Door system",
            "Switch interactions",
            "Object inspection",
            "Flashlight system",
            "Locked-door behaviour",
            "Environmental interactions"
        ],

        link: null

    }

};


// =========================================
// ENTER THE LAB
// =========================================

enterLabButton.addEventListener("click", () => {

    bootScreen.classList.add("boot-exit");

    setTimeout(() => {

        bootScreen.style.display = "none";

        lab.style.display = "block";

        window.scrollTo(0, 0);

    }, 700);

});


// =========================================
// VIEW PROJECTS
// =========================================

viewProjectsButton.addEventListener("click", () => {

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// =========================================
// PROJECT BUTTONS
// =========================================

const projectButtons =
    document.querySelectorAll(".project-button");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        openProject(projectId);

    });

});


// =========================================
// OPEN PROJECT
// =========================================

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) {

        console.error(
            "Project not found:",
            projectId
        );

        return;

    }


    document.getElementById("detailType").textContent =
        project.type;


    document.getElementById("detailTitle").textContent =
        project.title;


    document.getElementById("detailSubtitle").textContent =
        project.subtitle;


    document.getElementById("detailAbout").textContent =
        project.about;


    // TECH

    const techContainer =
        document.getElementById("detailTech");

    techContainer.innerHTML = "";

    project.tech.forEach(tech => {

        const span =
            document.createElement("span");

        span.textContent = tech;

        techContainer.appendChild(span);

    });


    // CONTRIBUTIONS

    const contributionContainer =
        document.getElementById(
            "detailContributions"
        );

    contributionContainer.innerHTML = "";

    project.contributions.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        contributionContainer.appendChild(li);

    });


    // =========================================
// PROJECT LINK
// =========================================

const detailLink =
    document.getElementById("detailLink");

const detailLinkText =
    document.getElementById("detailLinkText");


if (project.link) {

    detailLink.href = project.link;

    detailLinkText.textContent =
        project.linkText || "OPEN PROJECT";

    detailLink.style.display = "inline-flex";

} else {

    detailLink.style.display = "none";

}
// =========================================
// SHOW PROJECT DETAIL
// =========================================

projectDetail.classList.add("active");

projectDetail.scrollTop = 0;

}


// =========================================
// CLOSE PROJECT
// =========================================

closeProject.addEventListener("click", () => {

    projectDetail.classList.remove("active");

    setTimeout(() => {

        document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

});