// Simple script to show a submit message and highlight active link (already handled server-side by per-page active class)
function handleForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thank you — form submission simulated. Replace with backend/email integration.';
  status.style.color = 'var(--accent)';
  e.target.reset();
}
