# Wedding Homepage Redesign - Design Spec

## Overview

Redesign the wedding invitation single-page site with a high-end minimalist aesthetic. Color palette: cream white, champagne gold, light pink. Overall feel: tender, romantic, translucent, premium.

## Color Palette

| Role | Color |
|------|-------|
| Cream White (bg) | `#FFF8F0` |
| Champagne Gold (accent) | `#D4A574` |
| Champagne Dark (hover) | `#C9A96E` |
| Light Pink (section bg) | `#F5E6E8` |
| Text Dark | `#2C2C2C` |
| Text Light | `#666666` |
| White | `#FFFFFF` |

## Typography

- **Chinese**: `Noto Serif SC` (elegant serif)
- **English/Logo**: `Dancing Script` (handwritten)
- Fallback: Georgia, serif

## Page Structure

### 1. Navigation Bar
- Fixed top, z-index 1000
- Background: `rgba(255, 248, 240, 0.85)` with `backdrop-filter: blur(10px)`
- Left: Logo "Our Wedding" in Dancing Script
- Center: menu items (首页, 关于我们, 婚礼信息, 相册, 婚礼流程, 答疑)
- Right: champagne gold rounded RSVP button
- Responsive: collapse menu to hamburger on mobile

### 2. Hero Banner
- Full viewport height (100vh)
- Background: large seaside sunset wedding photo (use `images/welcome-design.jpg`)
- Overlay: gradient with champagne/light-pink tint
- Left-aligned text content:
  - "WELCOME TO OUR WEDDING" (Dancing Script, gold)
  - Couple names "郑哲 ❤️ 陆琳娜" (large Chinese serif)
  - Date "2026年10月25日 12:08"
  - Tagline "两枚硬币，顺时针各转三圈"
  - Gold rounded "确认出席" button
- Bottom: info bar with location, countdown, guest count (frosted glass)

### 3. Wedding Info Cards
- Light pink gradient background
- 4-column grid (responsive: 2-col on tablet, 1-col on mobile)
- Cards: 日期, 时间, 地点, 着装建议
- Linear icons for each card
- Centered "查看地图导航" button below cards

### 4. Timeline
- Horizontal timeline with gold connector line
- 6 nodes: 宾客签到, 婚礼仪式, 合影留念, 晚宴开始, 甜品派对, 婚礼结束
- Gold circular nodes with numbers
- Clean, ceremonial feel

### 5. Gallery
- Horizontal scrollable photo row
- Rounded corners, warm filter
- Photos: flowers, rings, seaside, table settings
- "查看更多照片" button at bottom

### 6. Footer
- Cream white background with top border
- Floral line-art decoration
- "期待在婚礼上与你相见！" in Dancing Script
- Social/contact icons
- Minimal whitespace

## Modules Removed
- About Us section (Polaroid photos + story text) — removed per user request

## Technical Notes
- Vanilla JS, no build toolchain
- Existing `js/supabase.js`, `js/countdown.js`, `js/rsvp.js`, `js/realtime.js`, `js/app.js` remain
- `build.js` injects env vars into `index.html`
- RSVP modal: keep existing functionality, restyle to match new design
- Amap API key in `index.html:91` — preserve
- All existing env vars (SUPABASE_URL, SUPABASE_ANON_KEY, AMAP_API_KEY) must be preserved

## Responsive Breakpoints
- Desktop: > 1024px (full layout)
- Tablet: 768px–1024px (2-col cards, smaller hero text)
- Mobile: < 768px (stacked layout, hamburger nav, 1-col cards)

## Success Criteria
- Matches high-end minimalist aesthetic (cream + champagne + light pink)
- All 5 sections present: Nav, Hero, Info Cards, Timeline, Gallery, Footer
- RSVP modal functional and styled
- Responsive on mobile/tablet/desktop
- No regression in existing JS functionality (RSVP submission, countdown, realtime)
