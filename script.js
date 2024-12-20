function validarCorreo(correo) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(correo);
}

document.getElementById('hero-form').addEventListener('submit', function(evento) {
  evento.preventDefault();
  const correoHero = document.getElementById('hero-email').value;
  const mensajeErrorHero = document.getElementById('hero-error-message');
  
  if (correoHero === '') {
    mensajeErrorHero.textContent = 'El campo no puede estar vacío.';
  } else if (!validarCorreo(correoHero)) {
    mensajeErrorHero.textContent = 'Por favor, introduce un correo válido.';
  } else {
    mensajeErrorHero.textContent = '';
    alert('Email enviado correctamente.');
  }
});

document.getElementById('cta-form').addEventListener('submit', function(evento) {
  evento.preventDefault();
  const correoCta = document.getElementById('cta-email').value;
  const mensajeErrorCta = document.getElementById('cta-error-message');
  
  if (correoCta === '') {
    mensajeErrorCta.textContent = 'El campo no puede estar vacío.';
  } else if (!validarCorreo(correoCta)) {
    mensajeErrorCta.textContent = 'Por favor, introduce un correo válido.';
  } else {
    mensajeErrorCta.textContent = '';
    alert('Email enviado correctamente.');
  }
});