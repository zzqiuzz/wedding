// js/app.js
(function() {
    function initApp() {
        console.log('婚礼网站初始化...');

        // 初始化图片查看器
        initImageViewer();

        // 平滑滚动（如果使用导航）
        initSmoothScroll();
    }

    function initImageViewer() {
        const welcomeImage = document.getElementById('welcomeImage');

        if (!welcomeImage) return;

        welcomeImage.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
            `;

            const img = document.createElement('img');
            img.src = this.src;
            img.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain;';

            modal.appendChild(img);
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    }

    function initSmoothScroll() {
        // 如果将来添加导航菜单，这里可以添加平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
