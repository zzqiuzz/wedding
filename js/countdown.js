// js/countdown.js
(function() {
    const weddingDate = new Date('2026-10-25T12:08:00+08:00');
    const countdownEl = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            countdownEl.textContent = '婚礼正在进行中！';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        // 精简版只显示天数
        countdownEl.textContent = days + '天';
    }

    // 初始调用
    updateCountdown();

    // 每天更新一次（不需要每秒更新）
    setInterval(updateCountdown, 60000 * 60 * 24); // 24小时更新一次
})();
