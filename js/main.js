document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const style = data.get('style') || '';
  const message = data.get('message') || '';

  const subject = `Enquiry from ${name} via Vale Therapy website`;
  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Preferred session style: ${style}\n\n` +
    `${message}`;

  const mailto = `mailto:hello@valetherapyservices.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
