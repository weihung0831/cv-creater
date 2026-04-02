# 蕭偉泓 — 個人履歷網站

[English](./README.md)

個人履歷網站，採用深色科技風設計，搭配粒子背景、打字機效果、滾動動畫等互動效果。

## 預覽

- 🎨 深色主題 + 青綠色強調
- ✨ Three.js 粒子背景
- ⌨️ 打字機效果
- 📜 GSAP ScrollTrigger 滾動動畫
- 📱 響應式設計

## 技術棧

| 類別 | 技術 |
|------|------|
| Framework | [Astro](https://astro.build/) (SSG) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animation | [GSAP](https://gsap.com/) + [Three.js](https://threejs.org/) + [Lenis](https://lenis.darkroom.engineering/) |
| Language | TypeScript |
| Deploy | Vercel |

## 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置靜態網站
npm run build

# 預覽建置結果
npm run preview
```

## 專案結構

```
src/
├── layouts/Layout.astro        # HTML shell、meta、字體載入
├── pages/index.astro           # 單頁入口
├── components/                 # 頁面區塊元件
│   ├── Navbar.astro            # 毛玻璃導航列
│   ├── Hero.astro              # 粒子背景 + 打字機效果
│   ├── Experience.astro        # 工作經歷時間軸
│   ├── Projects.astro          # 專案卡片
│   ├── Skills.astro            # 技能進度條
│   ├── Education.astro         # 學歷
│   ├── Publications.astro      # 論文與獲獎
│   ├── GitHub.astro            # Side Projects
│   ├── Contact.astro           # 聯絡方式
│   └── Footer.astro            # 回到頂部按鈕
├── scripts/                    # 動畫邏輯
│   ├── particles.ts            # Three.js 粒子背景
│   ├── animations.ts           # GSAP ScrollTrigger 動畫
│   └── typewriter.ts           # 打字機效果
├── styles/global.css           # Tailwind + CSS custom properties
└── data/resume.ts              # 履歷資料集中管理
```

## 頁面區塊

1. **Hero** — 姓名、職稱、簡介、粒子背景
2. **Experience** — 工作經歷時間軸
3. **Projects** — 專案卡片展示
4. **Skills** — 技能進度條動畫
5. **Education** — 學歷資訊
6. **Publications & Awards** — 論文與獲獎
7. **Side Projects** — 個人專案連結
8. **Contact** — 聯絡方式
