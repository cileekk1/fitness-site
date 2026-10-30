// GLOWFIT - CLIENT INTERACTION LOGIC (VANILLA JS)

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initContactForm();
  initDynamicYear();
});

/**
 * Mobile Navigation Toggle and Header State
 */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('primaryNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!navToggle || !navMenu) return;

  function toggleMenu(forceState) {
    const isCurrentlyOpen = navMenu.classList.contains('open');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    navMenu.classList.toggle('open', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen.toString());
  }

  navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu when clicking any nav anchor link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(false);
      navToggle.focus();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      if (navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    }
  });
}

/**
 * Frontend-only Trial Booking Form with Validation
 */
function initContactForm() {
  const form = document.getElementById('trialBookingForm');
  const feedback = document.getElementById('formFeedback');
  const feedbackMessage = document.getElementById('feedbackMessage');

  if (!form) return;

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const programInput = document.getElementById('programSelect');
  const timeInput = document.getElementById('preferredTime');

  const nameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const programError = document.getElementById('programError');
  const timeError = document.getElementById('timeError');

  const requiredFields = [
    { input: fullNameInput, errorEl: nameError },
    { input: emailInput, errorEl: emailError },
    { input: programInput, errorEl: programError },
    { input: timeInput, errorEl: timeError }
  ];

  function clearErrors() {
    requiredFields.forEach(({ input, errorEl }) => {
      if (errorEl) errorEl.textContent = '';
      if (input) {
        input.classList.remove('has-error');
        input.removeAttribute('aria-invalid');
      }
    });
  }

  function clearFieldError(input, errorEl) {
    if (input) {
      input.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
    }
    if (errorEl) {
      errorEl.textContent = '';
    }
  }

  // Clear error as user types or selects, and dismiss previous success notification if typing again
  requiredFields.forEach(({ input, errorEl }) => {
    if (!input) return;
    const events = ['input', 'change'];
    events.forEach(eventName => {
      input.addEventListener(eventName, () => {
        clearFieldError(input, errorEl);
        if (feedback && feedback.style.display !== 'none') {
          feedback.style.display = 'none';
        }
      });
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let hasError = false;
    let firstInvalidInput = null;

    // 1. Validate Full Name
    const nameVal = fullNameInput.value.trim();
    if (!nameVal) {
      fullNameInput.classList.add('has-error');
      fullNameInput.setAttribute('aria-invalid', 'true');
      nameError.textContent = 'Please enter your full name so we know who to welcome.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = fullNameInput;
    }

    // 2. Validate Email
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      emailInput.classList.add('has-error');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Please enter your email address so we can confirm your class.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    } else if (!isValidEmail(emailVal)) {
      emailInput.classList.add('has-error');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Please enter a valid email address (e.g. name@example.com).';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = emailInput;
    }

    // 3. Validate Program
    if (!programInput.value) {
      programInput.classList.add('has-error');
      programInput.setAttribute('aria-invalid', 'true');
      programError.textContent = 'Please select which program you would like to try.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = programInput;
    }

    // 4. Validate Time
    if (!timeInput.value) {
      timeInput.classList.add('has-error');
      timeInput.setAttribute('aria-invalid', 'true');
      timeError.textContent = 'Please pick your preferred time of day.';
      hasError = true;
      if (!firstInvalidInput) firstInvalidInput = timeInput;
    }

    // If invalid, focus the first error field
    if (hasError) {
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      return;
    }

    // Valid submission: show clear success message inside the page
    const selectedProgramText = programInput.options[programInput.selectedIndex].text;
    const selectedTimeText = timeInput.options[timeInput.selectedIndex].text;

    feedbackMessage.innerHTML = `
      <strong>Thanks! This is a demo form, so no data is sent or stored.</strong><br/>
      <span class="feedback-subtext">We received your demo request for <em>${escapeHtml(nameVal)}</em> in <strong>${escapeHtml(selectedProgramText)}</strong> (${escapeHtml(selectedTimeText)}).</span>
    `;
    feedback.style.display = 'flex';

    // Clear form fields afterwards
    form.reset();

    // Smooth scroll to the success feedback banner
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Dynamic Copyright Year
 */
function initDynamicYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
