const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});

// Filter the skill cards by category.
const filterButtons = document.querySelectorAll('.filter');
const skillCards = document.querySelectorAll('.skill');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) {
      item.classList.remove('active');
    });
    button.classList.add('active');

    const selectedCategory = button.dataset.filter;
    skillCards.forEach(function (card) {
      if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Copy the email address to the clipboard.
document.getElementById('copyEmail').addEventListener('click', async function () {
  const email = 'potlapati.harshith49@gmail.com';
  const toast = document.getElementById('toast');

  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = 'Email copied to clipboard';
  } catch (error) {
    toast.textContent = email;
  }

  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 2200);
});
