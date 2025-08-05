// Placeholder for interactivity
console.log("Main JS loaded");

// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  form.addEventListener("submit", function (e) {
    let valid = true;

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    name.classList.remove("has-error");
    email.classList.remove("has-error");
    message.classList.remove("has-error");

    // Name
    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      name.classList.add("has-error");
      valid = false;
    }

    // Email
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      email.classList.add("has-error");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      emailError.textContent = "Please enter a valid email.";
      email.classList.add("has-error");
      valid = false;
    }

    // Message
    if (message.value.trim() === "") {
      messageError.textContent = "Message cannot be empty.";
      message.classList.add("has-error");
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Message sent successfully (simulated)");
    }
  });
});

// Freelancer search/filter
const searchInput = document.getElementById("freelancerSearch");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".freelancer-card");

    cards.forEach((card) => {
      const name = card.querySelector("h4").textContent.toLowerCase();
      const title = card.querySelector(".title").textContent.toLowerCase();
      const tagline = card.querySelector("p:last-of-type").textContent.toLowerCase();

      const matches =
        name.includes(query) ||
        title.includes(query) ||
        tagline.includes(query);

      card.style.display = matches ? "block" : "none";
    });
  });
}
