const nav = document.getElementById('nav'), menu = document.getElementById('menu');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.getElementById('modal');
document.getElementById('openBooking').addEventListener('click', () => modal.classList.add('show'));
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('show'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show') });

document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Merhaba InkHub!%0A%0A*Yeni Randevu Talebi*%0AAd Soyad: ${encodeURIComponent(f.get('name'))}%0ATelefon: ${encodeURIComponent(f.get('phone'))}%0AHizmet: ${encodeURIComponent(f.get('service'))}%0ATarih: ${encodeURIComponent(f.get('date') || 'Belirtilmedi')}%0ADetay: ${encodeURIComponent(f.get('message') || '')}`;
  window.open(`https://wa.me/905541382131?text=${msg}`, '_blank');
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => header.style.background = scrollY > 40 ? 'rgba(5,5,5,.95)' : 'rgba(5,5,5,.72)');
