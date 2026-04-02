import { ui, experiences, projects, educationData, publicationsData, sideProjectsData, type Locale } from '../data/i18n';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function getLocale(): Locale {
  return (localStorage.getItem('locale') as Locale) || 'en';
}

function setLocale(locale: Locale) {
  localStorage.setItem('locale', locale);
  applyLocale(locale);
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderTag(tag: string, size: 'sm' | 'md' = 'md'): string {
  const cls = size === 'sm'
    ? 'rounded-[4px] border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent'
    : 'rounded-[4px] border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent';
  return `<span class="${cls}">${escapeHtml(tag)}</span>`;
}

function applyLocale(locale: Locale) {
  const t = ui[locale];

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n!;
    if (t[key]) el.textContent = t[key];
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = locale === 'en' ? '中文' : 'EN';

  document.documentElement.lang = locale === 'en' ? 'en' : 'zh-Hant';

  rebuildExperience(locale);
  rebuildProjects(locale);
  rebuildEducation(locale);
  rebuildPublications(locale);
  rebuildSideProjects(locale);

  reinitAnimations();
}

function rebuildExperience(locale: Locale) {
  const container = document.getElementById('experience-list');
  if (!container) return;
  container.innerHTML = experiences[locale].map((exp) => `
    <div class="timeline-item relative mb-12 last:mb-0">
      <div class="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent-glow)]"></div>
      <div class="font-mono text-xs tracking-wider text-accent">${escapeHtml(exp.period)}</div>
      <h3 class="mt-1 font-mono text-lg font-semibold">${escapeHtml(exp.title)}</h3>
      <div class="text-sm text-text-muted">${escapeHtml(exp.company)}</div>
      <div class="mb-3 text-xs text-text-dim">${escapeHtml(exp.location)} · ${escapeHtml(exp.industry)}</div>
      <ul class="space-y-1">
        ${exp.description.map((d) => `<li class="text-sm leading-relaxed text-text-dim"><span class="mr-2 text-accent">▸</span>${escapeHtml(d)}</li>`).join('')}
      </ul>
      <div class="mt-3 flex flex-wrap gap-2">${exp.tags.map((t) => renderTag(t)).join('')}</div>
    </div>
  `).join('');
}

function rebuildProjects(locale: Locale) {
  const container = document.getElementById('projects-list');
  if (!container) return;
  container.innerHTML = projects[locale].map((p) => `
    <div class="project-card group cursor-pointer rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_24px_var(--color-accent-glow)]">
      <div class="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent">${escapeHtml(p.category)}</div>
      <h3 class="mb-2 font-mono text-lg font-semibold">${escapeHtml(p.title)}</h3>
      <p class="mb-4 text-sm leading-relaxed text-text-muted">${escapeHtml(p.description)}</p>
      <div class="flex flex-wrap gap-2">${p.tags.map((t) => renderTag(t)).join('')}</div>
    </div>
  `).join('');
}

function rebuildEducation(locale: Locale) {
  const container = document.getElementById('education-list');
  if (!container) return;
  container.innerHTML = educationData[locale].map((edu) => `
    <div class="fade-up rounded-lg border border-border bg-surface p-6">
      <div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <h3 class="font-mono text-lg font-semibold">${escapeHtml(edu.school)}</h3>
          <p class="text-sm text-text-muted">${escapeHtml(edu.degree)}</p>
        </div>
        <span class="font-mono text-xs tracking-wider text-accent">${escapeHtml(edu.period)}</span>
      </div>
    </div>
  `).join('');
}

function rebuildPublications(locale: Locale) {
  const container = document.getElementById('publications-list');
  if (!container) return;
  container.innerHTML = publicationsData[locale].map((pub) => `
    <div class="fade-up rounded-lg border border-border bg-surface p-6">
      <div class="mb-2 inline-block rounded-[4px] bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
        🏆 ${escapeHtml(pub.award)}
      </div>
      <h3 class="mb-2 font-mono text-lg font-semibold">${escapeHtml(pub.title)}</h3>
      <p class="text-sm text-text-muted">${escapeHtml(pub.conference)}</p>
      <p class="mt-1 font-mono text-xs text-text-dim">${escapeHtml(pub.id)}</p>
    </div>
  `).join('');
}

function rebuildSideProjects(locale: Locale) {
  const container = document.getElementById('side-projects-list');
  if (!container) return;
  container.innerHTML = sideProjectsData[locale].map((p) => `
    <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer"
      class="fade-up group rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_0_24px_var(--color-accent-glow)]">
      <div class="mb-3 flex items-center gap-2">
        <svg class="h-5 w-5 text-text-muted group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        <span class="font-mono text-sm text-text-muted group-hover:text-accent transition-colors duration-300">${escapeHtml(p.name)}</span>
      </div>
      <p class="mb-3 text-sm leading-relaxed text-text-dim">${escapeHtml(p.description)}</p>
      <div class="flex flex-wrap gap-1.5">${p.tags.map((t) => renderTag(t, 'sm')).join('')}</div>
    </a>
  `).join('');
}

function reinitAnimations() {
  // Kill existing ScrollTrigger instances for rebuilt elements
  ScrollTrigger.getAll().forEach((st) => {
    const trigger = st.vars.trigger as HTMLElement | undefined;
    if (trigger && (
      trigger.closest('#experience-list') ||
      trigger.closest('#projects-list') ||
      trigger.closest('#education-list') ||
      trigger.closest('#publications-list') ||
      trigger.closest('#side-projects-list')
    )) {
      st.kill();
    }
  });

  // Re-register animations for new DOM elements
  gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%' },
      opacity: 0, x: -40, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
    });
  });

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

  gsap.utils.toArray<HTMLElement>('#education-list .fade-up, #publications-list .fade-up, #side-projects-list .fade-up').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 0, y: 30, duration: 0.6, ease: 'power2.out',
    });
  });

  ScrollTrigger.refresh();
}

// Init
applyLocale(getLocale());

// Language toggle via event listener
document.getElementById('lang-toggle')?.addEventListener('click', () => {
  setLocale(getLocale() === 'en' ? 'zh-TW' : 'en');
});
