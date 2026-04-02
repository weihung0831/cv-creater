import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Hero entrance
gsap.set('.hero-title, .hero-subtitle, .hero-desc, .hero-cta', { y: 30 });

gsap.timeline({ delay: 1.2 })
  .to('.hero-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
  .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
  .to('.hero-desc', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
  .to('.hero-cta', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

// Skill bars (static, not rebuilt by i18n)
gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
  const width = bar.dataset.width || '0%';
  gsap.to(bar, {
    scrollTrigger: { trigger: bar, start: 'top 90%' },
    width,
    duration: 1,
    ease: 'power2.out',
  });
});

// Reusable function to register animations for dynamic sections
export function registerDynamicAnimations() {
  // Section labels
  gsap.utils.toArray<HTMLElement>('.section-label').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, x: -30, duration: 0.6, ease: 'power2.out',
    });
  });

  // Timeline items
  gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, x: -40, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
    });
  });

  // Timeline line grow
  const timelineLine = document.querySelector('.timeline-line');
  if (timelineLine) {
    gsap.from(timelineLine, {
      scrollTrigger: { trigger: timelineLine, start: 'top 80%', end: 'bottom 20%', scrub: 1 },
      scaleY: 0, transformOrigin: 'top',
    });
  }

  // Project cards
  gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0, y: 40, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
    });
  });

  // 3D tilt on project cards
  document.querySelectorAll('.project-card').forEach((card) => {
    const el = card as HTMLElement;
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2) * -5;
      const rotateY = ((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2) * 5;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // Fade up elements
  gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
    });
  });

  ScrollTrigger.refresh();
}

// Kill dynamic animations (called before i18n rebuild)
export function killDynamicAnimations() {
  const dynamicContainers = ['#experience-list', '#projects-list', '#education-list', '#publications-list', '#side-projects-list'];
  ScrollTrigger.getAll().forEach((st) => {
    const trigger = st.vars.trigger as HTMLElement | undefined;
    if (trigger && dynamicContainers.some((sel) => trigger.closest(sel))) {
      st.kill();
    }
  });
}

// Initial registration
registerDynamicAnimations();

// Listen for i18n locale changes
window.addEventListener('locale-changed', () => {
  killDynamicAnimations();
  // Small delay to let DOM rebuild finish
  requestAnimationFrame(() => registerDynamicAnimations());
});
