/* ============================================
   form.js — Contact Form with Formspree
   ============================================
   Setup:
   1. Sign up at https://formspree.io (free)
   2. Create a new form → copy your endpoint ID
   3. Replace YOUR_FORM_ID below with it
      e.g. "https://formspree.io/f/xpwzgkna"
   ============================================ */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdpylwb';

export function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);
}

async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('.btn-sub');
  const statusEl = document.getElementById('formStatus');

  // Basic validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  statusEl.className = 'form-status';

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      statusEl.textContent = 'Message sent — we\'ll be in touch soon.';
      statusEl.className = 'form-status success';
      form.reset();
    } else {
      const json = await res.json();
      throw new Error(json?.errors?.[0]?.message || 'Submission failed');
    }
  } catch (err) {
    console.error('Form error:', err);
    statusEl.textContent = 'Something went wrong. Please email us directly.';
    statusEl.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
