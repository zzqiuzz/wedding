// js/app.js
(function() {
    function initApp() {
        console.log('婚礼网站初始化...');

        // Modal 控制
        initModal();
    }

    function initModal() {
        const modal = document.getElementById('rsvpModal');
        const openNavBtn = document.getElementById('openRsvpNav');
        const openHeroBtn = document.getElementById('openRsvpHero');
        const closeBtn = document.getElementById('closeRsvp');

        if (!modal) return;

        // 打开 Modal
        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }

        // 关闭 Modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // 绑定打开按钮
        if (openNavBtn) {
            openNavBtn.addEventListener('click', openModal);
        }
        if (openHeroBtn) {
            openHeroBtn.addEventListener('click', openModal);
        }

        // 绑定关闭按钮
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // 点击遮罩层关闭
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // ESC 键关闭
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
