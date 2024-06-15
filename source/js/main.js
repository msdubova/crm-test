document.addEventListener('DOMContentLoaded', function () {

  let button = document.querySelector('.sidebar__title');
  let menu = document.querySelector('.sidebar__menu');

  button.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('sidebar__menu--active');
  });
});
