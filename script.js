const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('ho-ten') || '';
  const phone = formData.get('so-dien-thoai') || '';
  const need = formData.get('nhu-cau') || '';
  const message = `Khách hàng đăng ký tư vấn VNPT:%0A- Họ tên: ${encodeURIComponent(name)}%0A- SĐT: ${encodeURIComponent(phone)}%0A- Nhu cầu: ${encodeURIComponent(need)}`;

  window.location.href = `sms:0912964104?body=${message}`;
});
