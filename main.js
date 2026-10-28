// PULSEFIT STUDIO - CLIENT INTERACTION LOGIC (VANILLA JS)

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

  function clearErrors() {
    [nameError, emailError, programError, timeError].forEach(el => {
      if (el) el.textContent = '';
    });
    [fullNameInput, emailInput, programInput, timeInput].forEach(el => {
      if (el) el.classList.remove('has-error');
    });
  }

  // Clear single field error on input
  [fullNameInput, emailInput, programInput, timeInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('has-error');
        const errEl = document.getElementById(`${input.id}Error`) || document.getElementById('programError') || document.getElementById('timeError');
        if (errEl) errEl.textContent = '';
      });
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let hasError = false;

    // Validate Name
    const nameVal = fullNameInput.value.trim();
    if (!nameVal) {
      fullNameInput.classList.add('has-error');
      nameError.textContent = 'Please enter your full name.';
      hasError = true;
    }

    // Validate Email
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      emailInput.classList.add('has-error');
      emailError.textContent = 'Please enter your email address.';
      hasError = true;
    } else if (!isValidEmail(emailVal)) {
      emailInput.classList.add('has-error');
      emailError.textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    // Validate Program
    if (!programInput.value) {
      programInput.classList.add('has-error');
      programError.textContent = 'Please select a program.';
      hasError = true;
    }

    // Validate Time
    if (!timeInput.value) {
      timeInput.classList.add('has-error');
      timeError.textContent = 'Please select a preferred time of day.';
      hasError = true;
    }

    if (hasError) return;

    // Frontend simulation of successful submission
    const selectedProgramText = programInput.options[programInput.selectedIndex].text;
    const selectedTimeText = timeInput.options[timeInput.selectedIndex].text;

    feedbackMessage.textContent = `Thank you, ${nameVal}! Your request for a free trial in "${selectedProgramText}" (${selectedTimeText}) has been recorded. Since PulseFit Studio is a student demonstration project, no real reservation has been made.`;
    feedback.style.display = 'flex';

    form.reset();

    // Smooth scroll to the feedback banner
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
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
