const categoryContainers = document.querySelectorAll('.category-container');
let currentCategoryName = "";

categoryContainers.forEach((categoryContainer) => {
  const categoryNameElement = categoryContainer.querySelector('.category-name');

  if (categoryNameElement) {
    const categoryNameText = categoryNameElement.textContent.trim();

    if (currentCategoryName !== categoryNameText) {
      currentCategoryName = categoryNameText;
    }

    const cards = categoryContainer.querySelectorAll('.card');

    cards.forEach((card) => {
      card.style.setProperty('--category-name', `"${currentCategoryName}"`);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalOpenButtons = document.querySelectorAll(".open-modal-button");
  const modalCloseButton = document.querySelector(".modal-close");

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.body.style.overflow = "auto";
    modal.style.animation = "fadeOut 0.3s ease-in-out";
    setTimeout(() => {
      modal.style.display = "none";
      modal.style.animation = "";
    }, 200);
  }

  modalOpenButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  modalCloseButton.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
});