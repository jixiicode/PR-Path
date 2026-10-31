// PR-Path: progress tracker, checklist persistence, and mobile navigation

const lessonCards = document.querySelectorAll(".lesson-card");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const progressBar = document.getElementById("progress-bar");

const LESSON_STORAGE_KEY = "prPathCompletedLessons";
const CHECKLIST_STORAGE_KEY = "prPathChecklist";

function loadCompletedLessons() {
    try {
        const saved = JSON.parse(localStorage.getItem(LESSON_STORAGE_KEY) || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

let completedLessons = loadCompletedLessons();

function updateProgress() {
    const total = lessonCards.length;
    const completed = completedLessons.length;
    const percentage = total === 0 ? 0 : (completed / total) * 100;

    progressLabel.textContent = `${completed} of ${total} completed`;
    progressFill.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuemax", String(total));
    progressBar.setAttribute("aria-valuenow", String(completed));
}

function renderLessonProgress() {
    lessonCards.forEach((card, index) => {
        const button = card.querySelector(".complete-button");
        const isComplete = completedLessons.includes(index);

        card.classList.toggle("is-complete", isComplete);
        button.textContent = isComplete ? "✓ Completed" : "Mark complete";
        button.setAttribute("aria-pressed", String(isComplete));
    });

    updateProgress();
}

lessonCards.forEach((card, index) => {
    const button = card.querySelector(".complete-button");

    button.addEventListener("click", () => {
        if (completedLessons.includes(index)) {
            completedLessons = completedLessons.filter((item) => item !== index);
        } else {
            completedLessons.push(index);
            completedLessons.sort((a, b) => a - b);
        }

        localStorage.setItem(LESSON_STORAGE_KEY, JSON.stringify(completedLessons));
        renderLessonProgress();
    });
});

function loadChecklist() {
    try {
        const saved = JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

const checklistItems = document.querySelectorAll(".check-row input");
const savedChecklist = loadChecklist();

checklistItems.forEach((checkbox, index) => {
    checkbox.checked = savedChecklist[index] === true;

    checkbox.addEventListener("change", () => {
        const current = Array.from(checklistItems, (item) => item.checked);
        localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(current));
    });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

renderLessonProgress();
