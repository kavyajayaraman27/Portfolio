/*=====================================================
PORTFOLIO SCRIPT
=====================================================*/

/*==========================================================
CONTACT FORM -> GOOGLE SHEET
===========================================================
1. Go to https://sheets.google.com and create a new sheet.
   Add header row: Name | Email | Subject | Message | Date
2. In that sheet: Extensions -> Apps Script. Delete any
   starter code and paste in the script from the file
   "google-apps-script.gs" included alongside these files.
3. Click Deploy -> New deployment -> select type "Web app".
   - Execute as: Me
   - Who has access: Anyone
   Click Deploy and authorize it.
4. Copy the Web app URL it gives you and paste it below,
   replacing the placeholder text between the quotes.
=========================================================== */

const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyitn0XeVu2eE4OiXoo2ESSptFFbHKwqVgBfrr9SfGlwIMSlSTvok8TUu0AL5jQ6f2p/exec";

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
    CONTACT FORM SUBMIT
    ==========================*/

    const contactForm = document.getElementById("contactForm");
    const statusEl = document.getElementById("contactFormStatus");

    if (contactForm) {

        contactForm.addEventListener("submit", async (e) => {

            e.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const subject = document.getElementById("contactSubject").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            if (!SHEET_WEBHOOK_URL || SHEET_WEBHOOK_URL.includes("PASTE_YOUR")) {

                statusEl.textContent = "Form isn't connected to a sheet yet — see script.js setup instructions.";
                statusEl.className = "form-status error";
                return;

            }

            statusEl.textContent = "Sending...";
            statusEl.className = "form-status";

            try {

                await fetch(SHEET_WEBHOOK_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, subject, message })
                });

                statusEl.textContent = "Thank you! Your message has been sent.";
                statusEl.className = "form-status success";
                contactForm.reset();

            } catch (err) {

                statusEl.textContent = "Something went wrong. Please try again or email me directly.";
                statusEl.className = "form-status error";

            }

        });

    }

    /*==========================
    LOADER
    ==========================*/

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }

    });

    /*==========================
    LOADER
    ==========================*/

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }

    });

    /*==========================
    STICKY NAVBAR
    ==========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

    /*==========================
    MOBILE MENU
    ==========================*/

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });

    /*==========================
    SCROLL PROGRESS
    ==========================*/

    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const scroll = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const progress = (scroll / height) * 100;

        progressBar.style.width = progress + "%";

    });

    /*==========================
    CURSOR GLOW
    ==========================*/

    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /*==========================
    DARK MODE
    ==========================*/

    const themeBtn = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }

    });

    /*==========================
    TYPING EFFECT
    ==========================*/

    const typing = document.getElementById("typing-text");

    const words = [

        "AWS Cloud Engineer",

        "Backend Developer",

        ".NET Developer",

        "Cloud Native Developer"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect() {

        const current = words[wordIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    if (typing) {

        typeEffect();

    }

    /*==========================
    SECTION REVEAL
    ==========================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    /*==========================
    ACTIVE NAVIGATION
    ==========================*/

    const sections = document.querySelectorAll("section");

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = window.scrollY;

            const offset = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==========================
    TOP BUTTON
    ==========================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*==========================
    SKILL BAR ANIMATION
    ==========================*/

    const bars = document.querySelectorAll(".progress span");

    const skillObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width = entry.target.style.width;

                entry.target.style.width = "0";

                setTimeout(() => {

                    entry.target.style.width = width;

                }, 300);

            }

        });

    });

    bars.forEach(bar => {

        skillObserver.observe(bar);

    });

    /*==========================
    SMOOTH SCROLL
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});