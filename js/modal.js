(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-first]'),
    closeModalBtn: document.querySelector('[data-modal-close-first]'),
    modal: document.querySelector('[data-modal-first]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-second]'),
    closeModalBtn: document.querySelector('[data-modal-close-second]'),
    modal: document.querySelector('[data-modal-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-third]'),
    closeModalBtn: document.querySelector('[data-modal-close-third]'),
    modal: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
  }
})();