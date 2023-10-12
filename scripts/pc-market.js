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

/* JSON CARD DATA FETCHING */
function fetchDataCards() {
  fetch('../data/pcs.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        const cardId = product.id;
        updateCard(cardId, product);
      })
    })
    .catch(error => {
      console.error('Error fetching JSON data: ', error);
    });
}

function updateCard(cardId, data) {
  const card = document.getElementById(cardId);
  card.querySelector("#price").textContent = data.price;
  card.querySelector("#fullName").textContent = data.fullName;
}

/* JSON MODAL DATA FETCHING */
function fetchDataModal(productId) {
  fetch('../data/pcs.json')
    .then(response => response.json())
    .then(data => {
      const productData = data.find(product => product.id === productId);
      updateModal(productData);
    })
    .catch(error => {
      console.error('Error fetching JSON data: ', error);
    });
}

function updateModal(productData) {
  document.querySelector("#fullName").textContent = productData.fullName;
  document.querySelector("#price").textContent = productData.price;
  document.querySelector("#cpu").textContent = productData.cpu;
  document.querySelector("#gpu").textContent = productData.gpu;
  document.querySelector("#motherboard").textContent = productData.motherboard;
  document.querySelector("#ram").textContent = productData.ram;
  document.querySelector("#ssd").textContent = productData.ssd;
  document.querySelector("#cooler").textContent = productData.cooler;
  document.querySelector("#powerSupply").textContent = productData.powerSupply;
  document.querySelector("#case").textContent = productData.case;
}

/* POPULATING CARDS */
fetchDataCards();

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
    button.addEventListener("click", function () {
      const cardId = button.id;
      fetchDataModal(cardId);
      openModal();
    });
  });

  modalCloseButton.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });
});
