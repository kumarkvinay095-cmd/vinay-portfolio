
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// Mobile navigation menu
if (menuToggle && nav) {
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
}

// Filter skill cards by category
const filterButtons = document.querySelectorAll('.skill-tab');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) {
      item.classList.remove('active');
    });

    button.classList.add('active');

    const selectedCategory = button.dataset.category;

    skillCards.forEach(function (card) {
      const matches =
        selectedCategory === 'all' ||
        card.dataset.category === selectedCategory;

      card.style.display = matches ? '' : 'none';
    });
  });
});

// Copy Vinay's email address
const copyEmailButton = document.getElementById('copyEmail');
const toast = document.getElementById('toast');

if (copyEmailButton && toast) {
  copyEmailButton.addEventListener('click', async function () {
    const email = 'vinaykumarkolakani6@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      toast.textContent = 'Email copied to clipboard';
    } catch (error) {
      toast.textContent = 'Email: ' + email;
    }

    toast.classList.add('show');

    setTimeout(function () {
      toast.classList.remove('show');
    }, 2200);
  });
}
