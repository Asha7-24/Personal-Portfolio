// =====================
// Typing Animation
// =====================

const roles = [
     "Aspiring Software Engineer",
    "Web Developer",
    "CSE Student",
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function type() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }
}

function erase() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(erase, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(type, 300);
    }
}

type();


// =====================
// Scroll Reveal Animation
// =====================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);

document.querySelectorAll(
    ".card, .skill, section"
).forEach(element => {

    observer.observe(element);

});


// =====================
// Active Navbar Link
// =====================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                scrollY >= sectionTop
            ) {
                current =
                    section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


// =====================
// Back To Top Button
// =====================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add(
    "back-to-top"
);

document.body.appendChild(
    topButton
);

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topButton.style.display =
                "block";

        } else {

            topButton.style.display =
                "none";

        }

    }
);