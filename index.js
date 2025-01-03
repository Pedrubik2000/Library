function openModal() {
  document.getElementById('newBook').showModal();
}
window.onload = function() {
  const dialog = document.getElementById('newBook');
  const plus = document.getElementById('plus');
  plus.addEventListener('click', openModal);
  dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })

}
