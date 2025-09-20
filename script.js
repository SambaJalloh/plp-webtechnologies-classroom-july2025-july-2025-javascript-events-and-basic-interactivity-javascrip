// ===============================
// Part 1: Light/Dark Mode Toggle
// ===============================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ===============================
// Part 2: Counter Game
// ===============================
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ===============================
// Part 2: Collapsible FAQ
// ===============================
const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default submission
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validation logic
  if (name === "") {
    formMessage.textContent = "❌ Name cannot be empty.";
    formMessage.style.color = "red";
  } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
    formMessage.textContent = "❌ Enter a valid email address.";
    formMessage.style.color = "red";
  } else if (password.length < 6) {
    formMessage.textContent = "❌ Password must be at least 6 characters.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Registration successful!";
    formMessage.style.color = "green";
    form.reset();
  }
});
