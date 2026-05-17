const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// Région pills interactif
document.querySelectorAll('.region-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    document
      .querySelectorAll('.region-pill')
      .forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
  });
});
