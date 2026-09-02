// Inicializar íconos de Lucide
lucide.createIcons();

// 1. Lógica para el menú móvil
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 2. Redirección de Formulario a WhatsApp
const quoteForm = document.getElementById('quote-form');

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reemplazar con el número de teléfono del negocio (código de país + número)
  const phoneNumber = "51973183848"; 

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const eventType = document.getElementById('eventType').value;
  const guests = document.getElementById('guests').value;
  const notes = document.getElementById('notes').value;

  // Construir mensaje codificado para la URL
  const message = `*SOLICITUD DE COTIZACIÓN*%0A%0A` +
    `*Nombre:* ${encodeURIComponent(name)}%0A` +
    `*Teléfono:* ${encodeURIComponent(phone)}%0A` +
    `*Tipo de Evento:* ${encodeURIComponent(eventType)}%0A` +
    `*Nº de Invitados:* ${encodeURIComponent(guests)}%0A` +
    `*Notas adicionales:* ${encodeURIComponent(notes || 'Sin especificaciones')}`;

  // Abrir WhatsApp en una nueva pestaña
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});
