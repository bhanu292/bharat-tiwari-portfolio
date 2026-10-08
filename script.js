const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const siteHeader = document.querySelector(".site-header");
const typingElement = document.getElementById("typing");
const yearElement = document.getElementById("year");
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const isOpen = navMenu.classList.contains("open");
        navToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });
    });
    document.addEventListener("click", (event) => {
        const clickedInsideMenu =
            navMenu.contains(event.target);
        const clickedToggle =
            navToggle.contains(event.target);
        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navMenu.classList.contains("open")
        ) {
            navMenu.classList.remove("open");
            navToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        }
    });
}
function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
}
window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);
handleHeaderScroll();
const typingWords = [
    "Frontend Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "Web Developer"
];
let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;
function typeEffect() {
    if (!typingElement) return;
    const currentWord =
        typingWords[wordIndex];
    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }
    typingElement.textContent =
        currentWord.substring(
            0,
            characterIndex
        );
    let typingSpeed = isDeleting
        ? 45
        : 85;
    if (
        !isDeleting &&
        characterIndex === currentWord.length
    ) {
        typingSpeed = 1800;
        isDeleting = true;
    }
    else if (
        isDeleting &&
        characterIndex === 0
    ) {
        isDeleting = false;
        wordIndex =
            (wordIndex + 1) %
            typingWords.length;
        typingSpeed = 400;
    }
    setTimeout(
        typeEffect,
        typingSpeed
    );
}
if (typingElement) {
    setTimeout(
        typeEffect,
        600
    );
}
if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}
const sections = document.querySelectorAll(
    "main section[id]"
);
function updateActiveNavigation() {
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop =
            section.offsetTop - 150;
        const sectionHeight =
            section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        const target =
            link.getAttribute("href");
        if (
            target ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
}
window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);
updateActiveNavigation();
const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".section-title, " +
    ".about-grid, " +
    ".experience-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-item, " +
    ".contact-container"
);
if ("IntersectionObserver" in window) {
    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting
                    ) {
                        entry.target.classList.add(
                            "visible"
                        );
                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },
            {
                threshold: 0.12
            }
        );
    revealElements.forEach((element) => {
        element.classList.add(
            "reveal"
        );
        revealObserver.observe(
            element
        );
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add(
            "visible"
        );
    });
}
const projectCards =
    document.querySelectorAll(
        ".project-card"
    );
projectCards.forEach(
    (card, index) => {
        card.style.transitionDelay =
            `${index * 100}ms`;

    }
);
const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );
skillCards.forEach(
    (card, index) => {
        card.style.transitionDelay =
            `${index * 100}ms`;
    }
);
const educationItems =
    document.querySelectorAll(
        ".education-item"
    );
educationItems.forEach(
    (item, index) => {
        item.style.transitionDelay =
            `${index * 100}ms`;

    }
);
const contactLinks =
    document.querySelectorAll(
        ".contact-link"
    );
contactLinks.forEach((link) => {
    link.addEventListener(
        "mouseenter",
        () => {
            link.style.transform =
                "translateX(5px)";
        }
    );
    link.addEventListener(
        "mouseleave",
        () => {
            link.style.transform =
                "";
        }
    );
});
const backToTop =
    document.querySelector(
        '.footer a[href="#home"]'
    );
if (backToTop) {
    backToTop.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}
document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("open")
        ) {
            navMenu.classList.remove(
                "open"
            );
            if (navToggle) {
                navToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }
        }
    }
);
console.log(
    "%cBharat Tiwari Portfolio",
    "font-size: 18px; font-weight: bold;"
);
console.log(
    "%cFrontend Developer | MERN Stack Developer",
    "font-size: 12px;"
);