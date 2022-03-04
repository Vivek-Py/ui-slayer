/* Hiding and showing modal on the screen */
const modalButton = document.getElementById("modal-btn");

modalButton.addEventListener("click", () => {
  const modalEle = document.getElementsByClassName("modal");
  modalEle[0].open = true;
});

const closeButton = document.getElementById("close-modal-btn");

closeButton.addEventListener("click", () => {
  const modalEle = document.getElementsByClassName("modal");
  modalEle[0].open = false;
});

/* Showing the toast for few seconds and hide it */
const toastButton = document.getElementById("toast-btn");

toastButton.addEventListener("click", () => {
  const toastEle = document.getElementsByClassName("toast");
  toastEle[0].style.display = "block";

  setTimeout(() => {
    const toastEle = document.getElementsByClassName("toast");
    toastEle[0].style.display = "none";
  }, 1200);
});
