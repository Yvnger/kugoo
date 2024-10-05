const header: HTMLElement | null = document.getElementById('header');
const navbarToggle: HTMLElement | null = document.querySelector('.js-navbar-toggle');
const navbar: HTMLElement | null = document.querySelector('.js-navbar');
const headerOpenedClass: string = 'header--opened';
const navbarOpenedClass: string = 'navbar--opened';
const hamburgerOpenedClass: string = 'hamburger--opened';

navbarToggle?.addEventListener('click', () => {
  let isOpen = () => {
    if (!header?.classList.contains(headerOpenedClass)) return false;
    if (!navbar?.classList.contains(navbarOpenedClass)) return false;
    if (!navbarToggle?.classList.contains(hamburgerOpenedClass)) return false;

    return true;
  }

  if (!isOpen()) {
    navbarOpen();
  } else {
    navbarClose();
  }
})

function navbarOpen() {
  header?.classList.add(headerOpenedClass);
  navbar?.classList.add(navbarOpenedClass);
  navbarToggle?.classList.add(hamburgerOpenedClass);
}

function navbarClose() {
  navbar?.classList.toggle(navbarOpenedClass);
  navbarToggle?.classList.toggle(hamburgerOpenedClass);
  setTimeout(() => {
    header?.classList.toggle(headerOpenedClass);
  }, 150);
}
