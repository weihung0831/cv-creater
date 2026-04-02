# Design System — 蕭偉泓 Portfolio

## Product Context
- **What this is:** 個人履歷網站，展示工作經歷、專案成果、技術能力、學術研究
- **Who it's for:** 招募者、潛在雇主、技術社群
- **Space/industry:** 軟體工程師個人品牌
- **Project type:** 單頁式作品集網站

## Tech Stack
- **Framework:** Astro (SSG)
- **Styling:** Tailwind CSS
- **Animation:** GSAP + ScrollTrigger + Three.js (粒子效果)
- **Deploy:** Vercel

## Aesthetic Direction
- **Direction:** Retro-Futuristic + Industrial
- **Decoration level:** Expressive（粒子背景、光暈效果、掃描線微紋理）
- **Mood:** SpaceX 任務控制室的冷靜技術感。不是科幻電影的浮誇，是真正工程師的精準與力量。

## Page Sections
1. **Hero** — 姓名、職稱、簡介、`$ whoami` 打字機效果、粒子背景
2. **Experience** — 工作經歷時間軸（5 段），滾動進場動畫
3. **Projects** — 專案卡片（4 個），3D 懸浮 / hover 光暈效果
4. **Skills** — 技能進度條動畫 / 互動式展示
5. **Education** — 學歷資訊
6. **Publications & Awards** — 最佳論文獎、研討會論文
7. **GitHub** — 開源專案連結（cnn_orange、mango_sweet、covid19）
8. **Contact** — 聯絡方式（email、電話、地點）

## Typography
- **Display/Hero:** JetBrains Mono — 等寬字體直接傳達工程師身份
- **Body:** Geist — Vercel 出品，現代感強，可讀性高，支援 tabular-nums
- **UI/Labels:** JetBrains Mono — 導航、標籤、按鈕
- **Code:** JetBrains Mono
- **Loading:** Google Fonts CDN
- **Scale:**
  - Hero: clamp(48px, 8vw, 96px)
  - H2: 32px
  - H3: 20px
  - Body: 16px
  - Small/Label: 13px
  - Tiny/Tag: 11px

## Color
- **Approach:** Restrained — 一個強調色 + 中性色，色彩稀少但有力
- **Background:** #0a0a0a
- **Surface:** #141414
- **Surface 2:** #1e1e1e
- **Border:** #262626
- **Text:** #e5e5e5
- **Text Muted:** #a3a3a3
- **Text Dim:** #525252
- **Accent:** #06b6d4（青綠色，科技感）
- **Accent Glow:** rgba(6, 182, 212, 0.15)
- **Accent Dim:** #0891b2
- **Semantic:** success #22c55e, warning #eab308, error #ef4444, info #3b82f6
- **Light mode:** 支援切換。bg #fafafa, surface #ffffff, text #171717, accent #0891b2

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64)

## Layout
- **Approach:** Full-screen section-based scroll
- **Grid:** 單欄為主，專案卡片 2 欄 grid
- **Max content width:** 1200px
- **Border radius:** sm:4px, md:8px, lg:12px

## Motion
- **Approach:** Expressive — 全力展示，每個區塊都有動畫
- **Library:** GSAP + ScrollTrigger + Three.js
- **Easing:** enter(power2.out) exit(power2.in) move(power2.inOut)
- **Duration:** micro(75ms) short(200ms) medium(350ms) long(500ms)

### Animation Spec
| Section | Effect | Tech |
|---------|--------|------|
| Hero | 粒子背景 + `$ whoami` 打字機效果 + 姓名淡入 | Three.js + GSAP |
| Nav | 半透明毛玻璃 + 光暈 hover | CSS backdrop-filter |
| Experience | 時間軸滾動進場，左側線條漸進生長 | GSAP ScrollTrigger |
| Projects | 3D 卡片 hover 傾斜 + 邊框光暈 | CSS transform + box-shadow |
| Skills | 進度條從 0 動畫到目標值 | GSAP ScrollTrigger |
| Education | 淡入 + 上移入場 | GSAP ScrollTrigger |
| Publications | 淡入 + 上移入場 | GSAP ScrollTrigger |
| GitHub | 卡片 hover 效果 | CSS transition |
| Contact | 淡入入場 | GSAP ScrollTrigger |
| Global | Lenis 平滑滾動 + 視差效果 | Lenis + GSAP |

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-02 | Astro + Tailwind + GSAP + Three.js | 靜態優先效能好，Tailwind 快速開發，GSAP 業界標準動畫庫 |
| 2026-04-02 | 深色主題 + 青綠強調色 | 傳達技術感，與多數淺色履歷網站形成差異化 |
| 2026-04-02 | JetBrains Mono 標題 | 等寬字體強化工程師身份識別 |
| 2026-04-02 | 全螢幕區塊滾動 + 炫技動畫 | 用戶明確要求炫技動畫，網站本身就是技術 demo |
