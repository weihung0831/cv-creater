---
title: GSAP ScrollTrigger plugin registration error when multiple scripts import ScrollTrigger
date: 2026-04-02
category: runtime-errors
module: animations
problem_type: runtime_error
component: frontend_stimulus
symptoms:
  - "Invalid property scrollTrigger set to plugin? gsap.registerPlugin() — Object Missing"
  - All scroll-triggered animations broken (sections invisible)
  - Console flooded with repeated warnings
root_cause: scope_issue
resolution_type: code_fix
severity: high
tags:
  - gsap
  - scrolltrigger
  - i18n
  - astro
  - animation
---

# GSAP ScrollTrigger plugin registration error when multiple scripts import ScrollTrigger

## Problem

After adding i18n support, the entire page below the Hero section was blank. Console showed hundreds of "Invalid property scrollTrigger set to plugin? gsap.registerPlugin()" warnings. All GSAP ScrollTrigger animations were broken.

## Symptoms

- Console flooded with: `Invalid property scrollTrigger set to plugin? gsap.registerPlugin() — Object Missing`
- All sections with scroll-triggered animations (Experience, Projects, Skills, etc.) were invisible
- Only the Hero section (which uses a timed timeline, not ScrollTrigger) was visible

## What Didn't Work

- The i18n-client.ts script imported `gsap` and `ScrollTrigger` separately and used them directly for `reinitAnimations()` after DOM rebuild. This created a second module instance of ScrollTrigger that wasn't registered with GSAP's plugin system, because `gsap.registerPlugin(ScrollTrigger)` was only called in animations.ts.

## Solution

Centralized all GSAP/ScrollTrigger logic in `animations.ts` and used a custom DOM event for communication:

**animations.ts** — exports `registerDynamicAnimations()` and `killDynamicAnimations()`, listens for `locale-changed` event:

```typescript
// animations.ts — single source of truth for GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function registerDynamicAnimations() {
  // Register all ScrollTrigger animations for dynamic DOM elements
  ScrollTrigger.refresh();
}

export function killDynamicAnimations() {
  // Kill ScrollTrigger instances targeting rebuilt containers
  ScrollTrigger.getAll().forEach((st) => { /* kill if inside dynamic container */ });
}

window.addEventListener('locale-changed', () => {
  killDynamicAnimations();
  requestAnimationFrame(() => registerDynamicAnimations());
});
```

**i18n-client.ts** — removed all gsap/ScrollTrigger imports, dispatches event after DOM rebuild:

```typescript
// i18n-client.ts — no gsap imports
function applyLocale(locale: Locale) {
  // ... rebuild DOM sections ...
  window.dispatchEvent(new Event('locale-changed'));
}
```

## Why This Works

GSAP plugins must be registered exactly once via `gsap.registerPlugin()`. When two separate ES modules both `import { ScrollTrigger } from 'gsap/ScrollTrigger'`, bundlers may create separate module instances. Only the one that called `registerPlugin` works. By centralizing all GSAP usage in one file and using a DOM event for cross-module communication, ScrollTrigger is registered once and used from one place.

## Prevention

- **Single GSAP entry point**: Only one file should import and register GSAP plugins. Other files communicate via events or exported functions.
- **Never import GSAP in i18n/utility scripts**: If a script needs to trigger animation changes, dispatch a custom event instead of importing gsap directly.

## Related Issues

- None (first occurrence in this project)
