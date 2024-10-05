const phoneBlockOpenedClass: string = 'phone-block__list-wrap--opened';
const phoneBlockToggleOpenedClass: string = 'phone-block__toggle--opened';
const phoneBlockToggle: HTMLButtonElement | null = document.querySelector('.js-phone-block-toggle');
const phoneList: HTMLElement | null = document.getElementById('phone-list');

phoneBlockToggle?.addEventListener('click', (event) => {
  event.stopPropagation(); // Остановить всплытие события
  if (!phoneList?.classList.contains(phoneBlockOpenedClass)) {
    openPhoneBlock();
  } else {
    closePhoneBlock();
  }
});

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (phoneList?.classList.contains(phoneBlockOpenedClass) &&
    !phoneList.contains(target) &&
    phoneBlockToggle !== target) {
    closePhoneBlock();
  }
});

function openPhoneBlock() {
  phoneBlockToggle?.classList.add(phoneBlockToggleOpenedClass);
  phoneList?.classList.add(phoneBlockOpenedClass);
}

function closePhoneBlock() {
  phoneBlockToggle?.classList.remove(phoneBlockToggleOpenedClass);
  phoneList?.classList.remove(phoneBlockOpenedClass);
}
