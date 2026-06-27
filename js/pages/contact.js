document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const faqContainer = document.getElementById('faq-list');

  if (faqContainer) {
    faqContainer.innerHTML = FAQS.map(renderFaqItem).join('');
    initFaqAccordion();
  }

  const rules = {
    name: {
      validate: (v) => v.trim().length >= 2,
      message: 'Please enter your full name (at least 2 characters).',
    },
    email: {
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: 'Please enter a valid email address.',
    },
    phone: {
      validate: (v) => !v.trim() || /^[\d\s+\-()]{7,20}$/.test(v.trim()),
      message: 'Please enter a valid phone number (7–20 digits).',
    },
    subject: {
      validate: (v) => v.trim().length >= 3,
      message: 'Subject must be at least 3 characters.',
    },
    message: {
      validate: (v) => v.trim().length >= 10,
      message: 'Message must be at least 10 characters.',
    },
  };

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }

  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  function validateField(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input || !rules[fieldId]) return true;
    const valid = rules[fieldId].validate(input.value);
    if (!valid) showError(fieldId, rules[fieldId].message);
    else clearError(fieldId);
    return valid;
  }

  Object.keys(rules).forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    input?.addEventListener('blur', () => validateField(fieldId));
    input?.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(fieldId);
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    Object.keys(rules).forEach((fieldId) => {
      if (!validateField(fieldId)) isValid = false;
    });
    if (!isValid) {
      const firstError = form.querySelector('.form-input.error, .form-textarea.error');
      firstError?.focus();
      return;
    }
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });

  document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    if (!emailInput || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput?.classList.add('error');
      return;
    }
    emailInput.classList.remove('error');
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  });
});
