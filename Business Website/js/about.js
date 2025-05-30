document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".boxes");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //toggle icons
    icon.classList.toggle("fa-up-long");
    icon.classList.toggle("fa-down-long");

    // toggle visibility of body
    groupBody.classList.toggle("open");

    //close other open faq body
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-up-long");
        otherIcon.classList.add("fa-down-long");
      }
    });
  });
});

// mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
