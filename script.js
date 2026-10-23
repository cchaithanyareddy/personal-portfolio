// Portfolio interactions and contact form validation
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // HTML constraint validation checks required fields, email format and minimum lengths.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email.setCustomValidity(emailPattern.test(email.value.trim()) ? '' : 'Please enter a valid email address.');

    [name, email, subject, message].forEach((field) => {
      field.classList.toggle('is-valid', field.checkValidity());
      field.classList.toggle('is-invalid', !field.checkValidity());
    });

    if (!form.checkValidity()) {
      status.textContent = 'Please correct the highlighted fields and try again.';
      status.style.color = '#ff9baf';
      form.classList.add('was-validated');
      return;
    }

    status.textContent = 'Validation successful! This demo does not send the message to a server.';
    status.style.color = '#49d9d0';
    form.classList.add('was-validated');
  });

  document.querySelectorAll('.navbar .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navLinks');
      if (menu && menu.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
