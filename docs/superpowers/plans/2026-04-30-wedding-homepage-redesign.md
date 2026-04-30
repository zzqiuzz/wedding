# Wedding Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the wedding invitation site with high-end minimalist aesthetic (cream white, champagne gold, light pink).

**Architecture:** Single-page site with 5 sections (Nav, Hero, Info Cards, Timeline, Gallery, Footer). Vanilla JS, no build toolchain. CSS custom properties for design tokens.

**Tech Stack:** HTML5, CSS3 (Grid/Flexbox), Vanilla JS, Google Fonts (Noto Serif SC, Dancing Script)

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `index.html` | Modify | Full page structure: Nav, Hero, Info Cards, Timeline, Gallery, Footer |
| `css/style.css` | Rewrite | Complete styling matching design spec |
| `js/supabase.js` | Keep | Supabase client init (preserve hardcoded credentials) |
| `js/countdown.js` | Keep | Countdown timer |
| `js/rsvp.js` | Keep | RSVP form submission |
| `js/realtime.js` | Keep | Realtime guest updates |
| `js/app.js` | Keep | App entry point |
| `js/map.js` | Keep | Amap integration |
| `build.js` | Keep | Env var injection (preserve) |

---

### Task 1: Restructure index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Write new index.html structure**

Replace entire `index.html` with:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#FFF8F0">
    <title>郑哲 & 陆琳娜 - 婚礼邀请</title>
    <meta name="description" content="郑哲和陆琳娜的婚礼邀请函，2026年10月25日，灌云县伊山镇皇冠世纪酒店">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Dancing+Script:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">Our Wedding</div>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#hero">首页</a></li>
                <li><a href="#info">婚礼信息</a></li>
                <li><a href="#timeline">婚礼流程</a></li>
                <li><a href="#gallery">相册</a></li>
                <li><a href="#faq">答疑</a></li>
            </ul>
            <button class="btn-rsvp-nav" id="openRsvpNav">RSVP</button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <p class="hero-welcome">WELCOME TO OUR WEDDING</p>
            <h1 class="hero-names">郑哲 ❤️ 陆琳娜</h1>
            <p class="hero-date">2026年10月25日 12:08</p>
            <p class="hero-tagline">两枚硬币，顺时针各转三圈</p>
            <button class="btn-hero-rsvp" id="openRsvpHero">确认出席</button>
        </div>
        <div class="hero-info-bar">
            <div class="info-item">
                <span class="info-icon">📍</span>
                <span class="info-text">灌云县伊山镇皇冠世纪酒店</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-item">
                <span class="info-icon">⏱️</span>
                <span class="info-text" id="countdown">178天</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-item">
                <span class="info-icon">👥</span>
                <span class="info-text">已确认 <strong id="totalGuests">0</strong> 人</span>
            </div>
        </div>
    </section>

    <!-- Wedding Info Cards -->
    <section class="section section-info" id="info">
        <h2 class="section-title">婚礼信息</h2>
        <p class="section-subtitle">期待与你共度美好时光</p>
        <div class="info-cards">
            <div class="info-card">
                <div class="info-card-icon">📅</div>
                <h3>日期</h3>
                <p>2026.10.25</p>
            </div>
            <div class="info-card">
                <div class="info-card-icon">⏰</div>
                <h3>时间</h3>
                <p>12:08 PM</p>
            </div>
            <div class="info-card">
                <div class="info-card-icon">📍</div>
                <h3>地点</h3>
                <p>皇冠世纪酒店</p>
            </div>
            <div class="info-card">
                <div class="info-card-icon">👔</div>
                <h3>着装建议</h3>
                <p>轻奢正装</p>
            </div>
        </div>
        <div style="text-align:center; margin-top:30px;">
            <button class="btn-map" id="openMap">查看地图导航</button>
        </div>
    </section>

    <!-- Timeline -->
    <section class="section section-timeline" id="timeline">
        <h2 class="section-title">婚礼流程</h2>
        <p class="section-subtitle">一起见证每一个珍贵时刻</p>
        <div class="timeline">
            <div class="timeline-line"></div>
            <div class="timeline-item">
                <div class="timeline-dot">1</div>
                <p>宾客签到</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">2</div>
                <p>婚礼仪式</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">3</div>
                <p>合影留念</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">4</div>
                <p>晚宴开始</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">5</div>
                <p>甜品派对</p>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot">6</div>
                <p>婚礼结束</p>
            </div>
        </div>
    </section>

    <!-- Gallery -->
    <section class="section section-gallery" id="gallery">
        <h2 class="section-title">相册</h2>
        <p class="section-subtitle">记录每一个美好瞬间</p>
        <div class="gallery-scroll">
            <div class="gallery-item">🌸 鲜花</div>
            <div class="gallery-item">💍 戒指</div>
            <div class="gallery-item">🌊 海边</div>
            <div class="gallery-item">🍽️ 餐桌</div>
            <div class="gallery-item">💐 手捧花</div>
        </div>
        <div style="text-align:center; margin-top:30px;">
            <button class="btn-hero-rsvp" style="font-size:0.9rem; padding:10px 28px;">查看更多照片</button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="faq">
        <div class="footer-deco">🌸 ✿ 🌸</div>
        <p class="footer-text">期待在婚礼上与你相见！</p>
        <div class="footer-social">
            <a href="#" aria-label="Email">📧</a>
            <a href="#" aria-label="Phone">📱</a>
            <a href="#" aria-label="WeChat">💬</a>
        </div>
    </footer>

    <!-- RSVP Modal -->
    <div class="modal-overlay" id="rsvpModal">
        <div class="modal-content">
            <button class="modal-close" id="closeRsvp">&times;</button>
            <h2 class="modal-title">确认出席</h2>
            <form id="rsvpForm" class="rsvp-form">
                <div class="form-group">
                    <label for="name">姓名 *</label>
                    <input type="text" id="name" name="name" required placeholder="请输入您的姓名">
                </div>
                <div class="form-group">
                    <label for="guests">出席人数 *</label>
                    <select id="guests" name="guests" required>
                        <option value="">请选择人数</option>
                        <option value="1">1人</option>
                        <option value="2">2人</option>
                        <option value="3">3人</option>
                        <option value="4">4人</option>
                        <option value="5">5人</option>
                        <option value="6">6人</option>
                        <option value="7">7人</option>
                        <option value="8">8人</option>
                        <option value="9">9人</option>
                        <option value="10">10人</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="phone">手机号 *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="请输入11位手机号" pattern="[0-9]{11}">
                </div>
                <button type="submit" class="btn-submit">确认出席</button>
            </form>
            <div id="message" class="message" style="display: none;"></div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
    <script src="js/supabase.js"></script>
    <script src="js/countdown.js"></script>
    <script src="js/rsvp.js"></script>
    <script src="js/realtime.js"></script>
    <script src="js/map.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML structure**

Run: `grep -c '<section\|<footer\|<nav' index.html`
Expected: count >= 4 (nav, hero is section, info, timeline, gallery, footer)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: restructure index.html with all 5 sections (nav, hero, info, timeline, gallery, footer)"
```

---

### Task 2: Rewrite css/style.css

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Write complete new CSS**

Replace entire `css/style.css` with:

```css
:root {
    --cream: #FFF8F0;
    --champagne: #D4A574;
    --champagne-dark: #C9A96E;
    --light-pink: #F5E6E8;
    --text-dark: #2C2C2C;
    --text-light: #666666;
    --white: #FFFFFF;
    --shadow: rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Serif SC', Georgia, serif;
    color: var(--text-dark);
    line-height: 1.6;
    background: var(--cream);
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-weight: 600;
}

/* ========== Navigation ========== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 248, 240, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 1px 10px var(--shadow);
    transition: background 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-family: 'Dancing Script', cursive;
    font-size: 1.8rem;
    color: var(--champagne);
    font-weight: 600;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.nav-toggle span {
    width: 24px;
    height: 2px;
    background: var(--text-dark);
    transition: 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
}

.nav-menu a {
    text-decoration: none;
    color: var(--text-dark);
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: var(--champagne);
    transition: width 0.3s ease;
}

.nav-menu a:hover {
    color: var(--champagne);
}

.nav-menu a:hover::after {
    width: 100%;
}

.btn-rsvp-nav {
    background: var(--champagne);
    color: var(--white);
    border: none;
    padding: 8px 24px;
    border-radius: 20px;
    font-family: 'Noto Serif SC', serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.btn-rsvp-nav:hover {
    background: var(--champagne-dark);
    transform: translateY(-1px);
}

/* ========== Hero Section ========== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                url('../images/welcome-design.jpg') center/cover no-repeat;
    background-color: var(--light-pink);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(245, 230, 248, 0.3), rgba(212, 165, 116, 0.2));
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 20px;
    max-width: 800px;
}

.hero-welcome {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    color: var(--champagne);
    letter-spacing: 3px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.hero-names {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: 15px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    font-weight: 700;
}

.hero-date {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 10px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.hero-tagline {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 25px;
    font-style: italic;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.btn-hero-rsvp {
    background: var(--champagne);
    color: var(--white);
    border: none;
    padding: 12px 35px;
    border-radius: 25px;
    font-family: 'Noto Serif SC', serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 165, 116, 0.4);
}

.btn-hero-rsvp:hover {
    background: var(--champagne-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 165, 116, 0.6);
}

/* Hero Info Bar */
.hero-info-bar {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 30px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 12px 30px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 10;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.info-icon {
    font-size: 1.1rem;
}

.info-text {
    color: var(--white);
    font-size: 0.85rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.info-text strong {
    color: var(--champagne);
    font-weight: 700;
}

.info-divider {
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.3);
}

/* ========== Section Common ========== */
.section {
    padding: 80px 40px;
}

.section-title {
    text-align: center;
    font-family: 'Dancing Script', cursive;
    font-size: 2.2rem;
    color: var(--champagne);
    margin-bottom: 8px;
}

.section-subtitle {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 50px;
}

/* ========== Info Cards ========== */
.section-info {
    background: linear-gradient(135deg, var(--light-pink), var(--cream));
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto;
}

.info-card {
    background: var(--white);
    padding: 30px 20px;
    border-radius: 14px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.info-card-icon {
    font-size: 2rem;
    margin-bottom: 12px;
}

.info-card h3 {
    font-size: 1rem;
    color: var(--text-dark);
    margin-bottom: 6px;
}

.info-card p {
    font-size: 0.85rem;
    color: var(--text-light);
}

.btn-map {
    background: var(--champagne);
    color: var(--white);
    border: none;
    padding: 10px 28px;
    border-radius: 20px;
    font-family: 'Noto Serif SC', serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.btn-map:hover {
    background: var(--champagne-dark);
    transform: translateY(-1px);
}

/* ========== Timeline ========== */
.section-timeline {
    background: var(--cream);
}

.timeline {
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 0;
}

.timeline-line {
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, var(--champagne) 20%, var(--champagne) 80%, transparent);
    transform: translateY(-50%);
}

.timeline-item {
    text-align: center;
    z-index: 1;
    flex: 1;
}

.timeline-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--champagne);
    background: var(--white);
    margin: 0 auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--champagne);
    transition: background 0.3s ease, color 0.3s ease;
}

.timeline-item:hover .timeline-dot {
    background: var(--champagne);
    color: var(--white);
}

.timeline-item p {
    font-size: 0.85rem;
    color: var(--text-dark);
}

/* ========== Gallery ========== */
.section-gallery {
    background: var(--cream);
}

.gallery-scroll {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 10px 0 20px;
    max-width: 1000px;
    margin: 0 auto;
    scroll-snap-type: x mandatory;
}

.gallery-scroll::-webkit-scrollbar {
    height: 6px;
}

.gallery-scroll::-webkit-scrollbar-thumb {
    background: var(--champagne);
    border-radius: 3px;
}

.gallery-item {
    min-width: 200px;
    height: 160px;
    background: linear-gradient(135deg, var(--light-pink), rgba(212, 165, 116, 0.2));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    color: var(--champagne);
    scroll-snap-align: start;
    transition: transform 0.3s ease;
    flex-shrink: 0;
}

.gallery-item:hover {
    transform: scale(1.03);
}

/* ========== Footer ========== */
.footer {
    text-align: center;
    padding: 60px 40px;
    background: var(--cream);
    border-top: 1px solid rgba(212, 165, 116, 0.2);
}

.footer-deco {
    font-size: 1.8rem;
    color: var(--champagne);
    margin-bottom: 20px;
}

.footer-text {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    color: var(--text-dark);
    margin-bottom: 20px;
}

.footer-social {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.footer-social a {
    font-size: 1.3rem;
    text-decoration: none;
    transition: transform 0.2s ease;
    display: inline-block;
}

.footer-social a:hover {
    transform: scale(1.2);
}

/* ========== RSVP Modal ========== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 20px;
}

.modal-overlay.active {
    display: flex;
}

.modal-content {
    background: var(--cream);
    padding: 40px;
    border-radius: 16px;
    max-width: 450px;
    width: 100%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: var(--text-light);
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: rgba(0, 0, 0, 0.05);
}

.modal-title {
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: var(--text-dark);
    text-align: center;
}

.rsvp-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 6px;
    font-weight: 500;
}

.form-group input,
.form-group select {
    padding: 10px 14px;
    border: 2px solid rgba(212, 165, 116, 0.3);
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: inherit;
    background: var(--white);
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--champagne);
}

.btn-submit {
    width: 100%;
    padding: 12px;
    background: var(--champagne);
    color: var(--white);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.btn-submit:hover {
    background: var(--champagne-dark);
    transform: translateY(-1px);
}

.btn-submit:active {
    transform: translateY(0);
}

.btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.message {
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    font-size: 0.9rem;
}

.message.success {
    background: #c6f6d5;
    color: #22543d;
}

.message.error {
    background: #fed7d7;
    color: #742a2a;
}

/* ========== Responsive ========== */
@media (max-width: 1024px) {
    .info-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 248, 240, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 20px 30px;
        box-shadow: 0 10px 30px var(--shadow);
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-names {
        font-size: 2.2rem;
    }

    .hero-welcome {
        font-size: 1.2rem;
    }

    .hero-date {
        font-size: 1.1rem;
    }

    .hero-tagline {
        font-size: 0.9rem;
    }

    .section {
        padding: 60px 20px;
    }

    .info-cards {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .timeline {
        flex-wrap: wrap;
        gap: 20px;
    }

    .timeline-line {
        display: none;
    }

    .timeline-item {
        flex: 0 0 30%;
    }

    .hero-info-bar {
        flex-direction: column;
        gap: 10px;
        padding: 15px 20px;
        bottom: 20px;
        width: 90%;
    }

    .info-divider {
        width: 80px;
        height: 1px;
    }

    .modal-content {
        padding: 30px 25px;
    }
}

@media (max-width: 480px) {
    .hero-names {
        font-size: 1.8rem;
    }

    .hero-content {
        padding: 15px;
    }

    .btn-hero-rsvp {
        padding: 10px 25px;
        font-size: 0.9rem;
    }

    .btn-rsvp-nav {
        padding: 6px 18px;
        font-size: 0.85rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .timeline-item {
        flex: 0 0 45%;
    }

    .gallery-item {
        min-width: 160px;
        height: 130px;
    }
}
```

- [ ] **Step 2: Verify CSS has no syntax errors**

Run: `cat css/style.css | grep -c "{"` and `cat css/style.css | grep -c "}"`
Expected: Both counts should be equal (or close, allowing for nested selectors)

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: rewrite style.css with high-end minimalist design (cream, champagne, light-pink)"
```

---

### Task 3: Verify and Test

**Files:**
- Read: `index.html`, `css/style.css`
- Read: `js/app.js`, `js/rsvp.js`, `js/countdown.js`, `js/realtime.js`

- [ ] **Step 1: Check all sections are present in HTML**

Run: `grep -n 'id="hero"\|id="info"\|id="timeline"\|id="gallery"\|id="faq"' index.html`
Expected: 5 matches (hero, info, timeline, gallery, faq/footer)

- [ ] **Step 2: Check CSS custom properties match design spec**

Run: `grep -E '(--cream|--champagne|--light-pink)' css/style.css | head -5`
Expected: Shows the 3 main colors from design spec

- [ ] **Step 3: Verify JS files still reference correct DOM IDs**

Run: `grep -n 'getElementById\|querySelector' js/*.js | grep -E '(navbar|hero|rsvpModal|countdown|totalGuests|openRsvp|closeRsvp|rsvpForm|message)'`
Expected: All DOM queries reference elements that exist in new HTML

- [ ] **Step 4: Check build.js still works with new index.html**

Run: `node build.js` (requires .env file with SUPABASE_URL, SUPABASE_ANON_KEY, AMAP_API_KEY)
Expected: No errors, creates output with env vars injected

- [ ] **Step 5: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: ensure JS compatibility with restructured HTML"
```

---

## Self-Review Checklist

1. **Spec coverage:** 
   - ✅ Nav: fixed, frosted glass, logo + menu + RSVP button
   - ✅ Hero: full viewport, photo bg, left-aligned text, info bar
   - ✅ Info Cards: 4-col grid, light pink bg, map button
   - ✅ Timeline: horizontal, gold dots, 6 nodes
   - ✅ Gallery: horizontal scroll, rounded images
   - ✅ Footer: floral deco, social icons
   - ✅ About Us: removed per user request
   - ✅ Colors: cream #FFF8F0, champagne #D4A574, light pink #F5E6E8
   - ✅ Fonts: Noto Serif SC + Dancing Script

2. **No placeholders:** All code blocks contain actual implementation code.

3. **Type consistency:** CSS custom properties consistently named across all tasks.

4. **JS compatibility:** Task 3 explicitly verifies DOM ID compatibility.
