const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const body = document.body;

// Initialize the theme
sunIcon.addEventListener("click", () => {
  body.classList.add("dark-mode");
});

moonIcon.addEventListener("click", () => {
  body.classList.remove("dark-mode");
});

const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Show modal with project details
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");

    modalTitle.textContent = title;
    modalDescription.textContent = desc;

    modal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission
  alert("Your message has been sent! Thank you for reaching out.");
  form.reset(); // Reset the form fields
});

// Typing Effect
const nameArray = ["Mohammad Alam Khan", "मोहम्मद आलम खान", "محمد عالم خان"];
let currentIndex = 0;

function typeEffect() {
  const typedName = document.getElementById("typed-name");
  typedName.textContent = nameArray[currentIndex];

  // Move to the next name after 3 seconds
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % nameArray.length;
    typeEffect();
  }, 3000);
}

// Start Typing Effect
typeEffect();
