const toggleSenha = document.getElementById('toggleSenha');
const senhaInput = document.getElementById('senha');

toggleSenha.addEventListener('click', () => {
  const isPassword = senhaInput.type === 'password';
  senhaInput.type = isPassword ? 'text' : 'password';

  toggleSenha.innerHTML = isPassword
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>`;
});

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const senhaError = document.getElementById('senhaError');

function validateEmail(value) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value);
}

function setError(input, errorEl, message) {
  input.classList.add('input-error');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('input-error');
  errorEl.textContent = '';
}

emailInput.addEventListener('input', () => {
  if (emailInput.value && !validateEmail(emailInput.value)) {
    setError(emailInput, emailError, 'Digite um e-mail válido.');
  } else {
    clearError(emailInput, emailError);
  }
});

senhaInput.addEventListener('input', () => {
  if (senhaInput.value.length > 0 && senhaInput.value.length < 6) {
    setError(senhaInput, senhaError, 'A senha deve ter pelo menos 6 caracteres.');
  } else {
    clearError(senhaInput, senhaError);
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  if (!emailInput.value.trim()) {
    setError(emailInput, emailError, 'O e-mail é obrigatório.');
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    setError(emailInput, emailError, 'Digite um e-mail válido.');
    valid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (!senhaInput.value.trim()) {
    setError(senhaInput, senhaError, 'A senha é obrigatória.');
    valid = false;
  } else if (senhaInput.value.length < 6) {
    setError(senhaInput, senhaError, 'A senha deve ter pelo menos 6 caracteres.');
    valid = false;
  } else {
    clearError(senhaInput, senhaError);
  }

  if (valid) {
    const btn = loginForm.querySelector('.btn-submit');
    btn.disabled = true;
    btn.textContent = 'Entrando...';

    setTimeout(() => {
      alert('Login realizado com sucesso!');
      btn.disabled = false;
      btn.textContent = 'Entrar';
    }, 1500);
  }
});
