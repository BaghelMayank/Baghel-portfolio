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
        
        image:
        "assets/projects/particlefx/hero.png",    

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
        buildInfo: {
    engine: "UNITY",
    language: "C#",
    platform: "UNITY EDITOR",
    status: "RELEASED TOOL"
},

systems: [

    {
        title: "PARTICLE GENERATION",
        description:
            "Reusable system for creating sprite-based particle effects."
    },

    {
        title: "EDITOR WORKFLOW",
        description:
            "Designed workflow for creating and configuring effects directly inside Unity."
    },

    {
        title: "SPRITE EFFECTS",
        description:
            "Built around 2D sprite-based visual effects."
    },

    {
        title: "PIPELINE SUPPORT",
        description:
            "Configured compatibility across Built-in, URP and HDRP."
    },

    {
        title: "REUSABLE ARCHITECTURE",
        description:
            "Designed the tool as a reusable Unity development package."
    }

],

breakdown: [

    {
        title: "TOOL ARCHITECTURE",
        description:
            "Designed the reusable architecture behind the particle tool."
    },

    {
        title: "PARTICLE SYSTEM",
        description:
            "Implemented the core sprite-based particle workflow."
    },

    {
        title: "EDITOR WORKFLOW",
        description:
            "Created the workflow used by developers inside the Unity Editor."
    },

    {
        title: "PIPELINE SUPPORT",
        description:
            "Tested compatibility across Unity rendering pipelines."
    },

    {
        title: "PUBLISHING",
        description:
            "Prepared documentation and published the tool to the Unity Asset Store."
    }

],

        link: "https://assetstore.unity.com/packages/tools/particles-effects/customparticlefxtool-331646",
        linkText: "VIEW ON UNITY ASSET STORE"

    },


    spacequest: {

        type: "// 2D GAME",

        title: "SPACEQUEST",

        subtitle:
            "A playable 2D space shooter built with Unity.",
        image:
    "assets/projects/spacequest/hero.jpg",

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
        buildInfo: {
        engine: "UNITY",
        language: "C#",
        platform: "WEBGL",
        status: "PLAYABLE"
    },

    systems: [

        {
            title: "PLAYER MOVEMENT",
            description:
                "Responsive player movement designed around arcade-style space combat."
        },

        {
            title: "PROJECTILE COMBAT",
            description:
                "Projectile-based shooting system handling firing, movement and hit detection."
        },

        {
            title: "ENEMY SYSTEM",
            description:
                "Enemy spawning and behaviour systems used to create gameplay pressure."
        },

        {
            title: "HEALTH SYSTEM",
            description:
                "Damage and health logic connecting player and combat interactions."
        },

        {
            title: "GAME STATE",
            description:
                "Gameplay flow connecting active play, scoring, failure and restart states."
        },

        {
            title: "VFX",
            description:
                "Visual feedback systems used to improve combat readability and impact."
        }

    ],

    breakdown: [

        {
            title: "PLAYER CONTROLLER",
            description:
                "Implemented player movement and gameplay input handling."
        },

        {
            title: "COMBAT SYSTEM",
            description:
                "Built projectile firing and collision-based combat interactions."
        },

        {
            title: "ENEMY BEHAVIOUR",
            description:
                "Created enemy spawning and gameplay behaviour."
        },

        {
            title: "HEALTH & DAMAGE",
            description:
                "Connected damage events with player health and game state."
        },

        {
            title: "UI & GAME FLOW",
            description:
                "Implemented gameplay UI and overall game-state transitions."
        }

    ],

        link: "https://play.unity.com/en/games/0c940df3-7bfb-4c65-b935-8960541ffc14/spacequest",
        linkText: "PLAY GAME"

    },


    skydash: {

        type: "// MOBILE GAME",

        title: "SKYDASH",

        subtitle:
            "A complete 2D mobile game with monetization.",
        
        image:
    "assets/projects/skydash/hero.jpg",

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
buildInfo: {
    engine: "UNITY",
    language: "C#",
    platform: "ANDROID",
    status: "MOBILE BUILD"
},

systems: [

    {
        title: "CORE GAMEPLAY",
        description:
            "Main gameplay loop designed around fast mobile interactions."
    },

    {
        title: "SCORING",
        description:
            "Score tracking system providing progression and replay motivation."
    },

    {
        title: "UI SYSTEM",
        description:
            "Mobile-oriented interface handling gameplay and game-state feedback."
    },

    {
        title: "GAME FLOW",
        description:
            "Complete flow connecting gameplay, menus and restart states."
    },

    {
        title: "MOBILE INPUT",
        description:
            "Gameplay interactions designed around mobile controls."
    },

    {
        title: "MONETIZATION",
        description:
            "Integrated Google Mobile Ads for in-game monetization."
    }

],

breakdown: [

    {
        title: "GAMEPLAY LOOP",
        description:
            "Designed and implemented the core gameplay loop."
    },

    {
        title: "SCORING SYSTEM",
        description:
            "Implemented score tracking and gameplay progression."
    },

    {
        title: "UI & MENUS",
        description:
            "Built gameplay UI and menu flow."
    },

    {
        title: "MOBILE OPTIMIZATION",
        description:
            "Adapted gameplay and UI for mobile interaction."
    },

    {
        title: "ADMOB",
        description:
            "Integrated Google Mobile Ads into the game."
    }

],
        link: null

    },


    horror: {

        type: "// 3D GAME // WORK IN PROGRESS",

        title: "FIRST-PERSON HORROR",

        subtitle:
            "A modular first-person horror experience.",
           
        image:
    "assets/projects/horror/hero.jpg",    

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
        buildInfo: {
    engine: "UNITY",
    language: "C#",
    platform: "PC",
    status: "IN DEVELOPMENT"
},

systems: [

    {
        title: "FPS CONTROLLER",
        description:
            "First-person movement and camera system built around CharacterController."
    },

    {
        title: "INTERACTION SYSTEM",
        description:
            "Reusable interaction architecture for doors, switches and world objects."
    },

    {
        title: "OBJECT INSPECTION",
        description:
            "Inspectable object system allowing players to examine environmental objects."
    },

    {
        title: "DOOR SYSTEM",
        description:
            "Interactive and locked-door behaviour connected to gameplay state."
    },

    {
        title: "FLASHLIGHT",
        description:
            "Player flashlight system used as both navigation and atmosphere."
    },

    {
        title: "ENVIRONMENT",
        description:
            "Lighting and environmental interactions designed to support horror atmosphere."
    }

],

breakdown: [

    {
        title: "FPS CONTROLLER",
        description:
            "Implemented first-person movement, camera and player control."
    },

    {
        title: "INTERACTION ARCHITECTURE",
        description:
            "Created reusable interaction logic for multiple environmental objects."
    },

    {
        title: "DOOR SYSTEM",
        description:
            "Built interactive and locked-door behaviours."
    },

    {
        title: "OBJECT INSPECTION",
        description:
            "Implemented inspectable objects and interaction feedback."
    },

    {
        title: "FLASHLIGHT SYSTEM",
        description:
            "Created flashlight controls and lighting interactions."
    },

    {
        title: "ENVIRONMENTAL GAMEPLAY",
        description:
            "Connected world interactions with exploration and atmosphere."
    }

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
    // =========================================
// PROJECT IMAGE
// =========================================

const detailImage =
    document.getElementById("detailImage");

//const visualPlaceholder =
   // document.querySelector(".visual-placeholder");


if (project.image) {

    detailImage.src = project.image;

    detailImage.style.display = "block";

    //visualPlaceholder.style.display = "none";

} else {

    detailImage.style.display = "none";

   // visualPlaceholder.style.display = "flex";

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
// BUILD HUD 
// =========================================

const buildHud =
    document.getElementById("projectBuildHud");

buildHud.innerHTML = "";

if (project.buildInfo) {

    const buildItems = [

        {
            label: "ENGINE",
            value: project.buildInfo.engine
        },

        {
            label: "LANGUAGE",
            value: project.buildInfo.language
        },

        {
            label: "PLATFORM",
            value: project.buildInfo.platform
        },

        {
            label: "STATUS",
            value: project.buildInfo.status
        }

    ];

    buildItems.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className = "build-hud-item";

        if (item.label === "STATUS") {

            div.innerHTML = `
                <span class="build-hud-label">
                    ${item.label}
                </span>

                <strong class="build-hud-value build-hud-status">
                    <i></i>
                    ${item.value}
                </strong>
            `;

        } else {

            div.innerHTML = `
                <span class="build-hud-label">
                    ${item.label}
                </span>

                <strong class="build-hud-value">
                    ${item.value}
                </strong>
            `;

        }

        buildHud.appendChild(div);

    });

}
// =========================================
// GAMEPLAY SYSTEMS 
// =========================================

const systemsContainer =
    document.getElementById("gameplaySystems");

systemsContainer.innerHTML = "";

if (project.systems) {

    project.systems.forEach((system, index) => {

        const card =
            document.createElement("article");

        card.className = "system-card";

        card.innerHTML = `

            <span class="system-index">
                SYSTEM_${String(index + 1).padStart(2, "0")}
            </span>

            <h4>
                ${system.title}
            </h4>

            <p>
                ${system.description}
            </p>

        `;

        systemsContainer.appendChild(card);

    });

}
// =========================================
// DEVELOPMENT BREAKDOWN 
// =========================================

const breakdownContainer =
    document.getElementById("developmentBreakdown");

breakdownContainer.innerHTML = "";

if (project.breakdown) {

    project.breakdown.forEach((item, index) => {

        const row =
            document.createElement("div");

        row.className = "breakdown-item";

        row.innerHTML = `

            <span class="breakdown-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <strong class="breakdown-title">
                ${item.title}
            </strong>

            <p class="breakdown-description">
                ${item.description}
            </p>

        `;

        breakdownContainer.appendChild(row);

    });

}
// =========================================
// PLAYABLE BUILD 
// =========================================

const playableBuildLink =
    document.getElementById("playableBuildLink");

const playableBuildLinkText =
    document.getElementById("playableBuildLinkText");

const playableBuildDescription =
    document.getElementById("playableBuildDescription");


if (project.link) {

    playableBuildLink.href =
        project.link;

    playableBuildLinkText.textContent =
        project.linkText || "OPEN BUILD";

    playableBuildLink.style.display =
        "inline-flex";

    playableBuildDescription.textContent =
        "The build is live. Open it and experience the project.";

} else {

    playableBuildLink.style.display =
        "none";

    playableBuildDescription.textContent =
        "This build is currently in development.";

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