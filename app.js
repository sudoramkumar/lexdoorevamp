const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("active");
  });
}
