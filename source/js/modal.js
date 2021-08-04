const buttonClose = document.querySelector(".modal-buy__button-close");
const modalForm = document.querySelector(".modal-buy");
const buyButtons = document.querySelectorAll(".button-buy");
const userPhone = modalForm.querySelector("[name=phone]");

const buttonCloseSuccess = document.querySelector(".modal-success__button-close");
const modalSuccess = document.querySelector(".modal-success");

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeModalForm();
  }
};

const showModalForm = () => {
  modalForm.classList.add("modal--show");
  userPhone.focus();
  window.addEventListener('keydown', onEscKeydown);
};

function closeModalForm() {
  modalForm.classList.remove("modal--show");
  window.removeEventListener('keydown', onEscKeydown);
}

Array.from(buyButtons).forEach((btn) => {
  btn.addEventListener("click", () => {
    showModalForm();
  });
});

buttonClose.addEventListener("click", () => {
  closeModalForm();
});

const onSuccessModalEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeSuccessForm();
  }
};

const showSuccessForm = () => {
  modalSuccess.classList.add("modal--show");
  window.addEventListener('keydown', onSuccessModalEscKeydown);
};

function closeSuccessForm() {
  modalSuccess.classList.remove("modal--show");
  window.removeEventListener('keydown', onSuccessModalEscKeydown);
}

buttonCloseSuccess.addEventListener("click", () => {
  closeSuccessForm();
});

modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  closeModalForm();
  showSuccessForm();
});
