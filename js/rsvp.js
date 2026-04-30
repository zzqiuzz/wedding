// js/rsvp.js
(function() {
    const form = document.getElementById('rsvpForm');
    const messageEl = document.getElementById('message');
    const modal = document.getElementById('rsvpModal');

    function showMessage(text, type) {
        messageEl.textContent = text;
        messageEl.className = 'message ' + type;
        messageEl.style.display = 'block';

        if (type === 'success') {
            setTimeout(() => {
                messageEl.style.display = 'none';
                // 关闭 Modal
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
                form.reset();
            }, 2000);
        }
    }

    function validatePhone(phone) {
        return /^1[0-9]{10}$/.test(phone);
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const guests = document.getElementById('guests').value;
        const phone = document.getElementById('phone').value.trim();

        // 验证
        if (!name) {
            showMessage('请输入姓名', 'error');
            return;
        }

        if (!guests) {
            showMessage('请选择出席人数', 'error');
            return;
        }

        if (!validatePhone(phone)) {
            showMessage('请输入正确的11位手机号', 'error');
            return;
        }

        // 禁用按钮防止重复提交
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = '提交中...';

        try {
            const supabase = window.weddingSupabase;

            const { data, error } = await supabase
                .from('rsvp')
                .insert([
                    {
                        name: name,
                        guests: parseInt(guests),
                        phone: phone
                    }
                ]);

            if (error) {
                throw error;
            }

            showMessage('登记成功，期待您的到来！', 'success');

        } catch (error) {
            console.error('RSVP提交错误:', error);
            showMessage('提交失败，请稍后重试', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = '确认出席';
        }
    });
})();
