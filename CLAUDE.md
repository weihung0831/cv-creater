# CLAUDE.md

## 語言規範

所有回應、文件皆使用**繁體中文**。程式碼中的變數名稱、函式名稱維持英文。

## 技術棧

- **Framework:** Astro (SSG)
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + ScrollTrigger + Three.js + Lenis
- **Language:** TypeScript
- **Deploy:** Vercel

## 常用指令

```bash
npm run dev       # 啟動開發伺服器 http://localhost:4321
npm run build     # 靜態產出至 dist/
npm run preview   # 預覽 build 結果
```

## 專案結構

```
src/
├── layouts/Layout.astro      # HTML shell、meta、字體載入
├── pages/index.astro         # 單頁，組合所有 components
├── components/               # 各區塊元件（Hero、Experience、Projects 等）
├── scripts/                  # 動畫邏輯（particles.ts、animations.ts、typewriter.ts）
├── styles/global.css         # Tailwind directives + CSS custom properties
└── data/resume.ts            # 所有履歷資料集中管理
```

## Design System

修改任何視覺或 UI 前，先讀 DESIGN.md。字體、色盤、間距、動畫規格皆定義於其中，未經使用者同意不得偏離。

## Git 規範

- Commit message 只寫一行標題（`type(scope): description`），**禁止加 body 或 footer**
- 使用 conventional commit 格式

## 開發原則

- **DRY** — 抽共用邏輯，避免重複程式碼
- **KISS** — 簡單優先，不過度設計
- **YAGNI** — 不實作尚未需要的功能

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

### Available skills

- `/office-hours`
- `/plan-ceo-review`
- `/plan-eng-review`
- `/plan-design-review`
- `/design-consultation`
- `/design-shotgun`
- `/design-html`
- `/review`
- `/ship`
- `/land-and-deploy`
- `/canary`
- `/benchmark`
- `/browse`
- `/connect-chrome`
- `/qa`
- `/qa-only`
- `/design-review`
- `/setup-browser-cookies`
- `/setup-deploy`
- `/retro`
- `/investigate`
- `/document-release`
- `/codex`
- `/cso`
- `/autoplan`
- `/careful`
- `/freeze`
- `/guard`
- `/unfreeze`
- `/gstack-upgrade`
- `/learn`
