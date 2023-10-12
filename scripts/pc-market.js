/* CATEGORY */
const categoryContainers = document.querySelectorAll('.category-container');
let currentCategoryName = "";

categoryContainers.forEach((categoryContainer) => {
  const categoryNameElement = categoryContainer.querySelector('.category-name');

  if (categoryNameElement) {
    const categoryNameText = categoryNameElement.innerText.trim();

    if (currentCategoryName !== categoryNameText) {
      currentCategoryName = categoryNameText;
    }

    const cards = categoryContainer.querySelectorAll('.card');

    cards.forEach((card) => {
      card.style.setProperty('--category-name', `"${currentCategoryName}"`);
    });
  }
});

/* JSON FETCHING */
let data;
function fetchData() {
  fetch('../data/pcs.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
    })
    .catch(error => {
      console.error('Error fetching JSON data: ', error);
    });
}

/* POPULATING CARDS */
function updateCard(cardId, data) {
  const card = document.getElementById(cardId);

  card.querySelector("#price").textContent = data.price;
  card.querySelector("#fullName").textContent = data.fullName;
}

fetchData();
if (data) {
  data.forEach(product => {
    const cardId = product.id;
    updateCard(cardId, product);
  })
}

/* JSON DATA FOR MODAL */
function updateModal(cardId, data) {
  const card = document.getElementById(cardId);

  card.querySelector("#price").textContent = data.price;
  card.querySelector("#fullName").textContent = data.fullName;
}

/* MODAL LOADING */
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
