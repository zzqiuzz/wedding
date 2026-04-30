// js/realtime.js
(function() {
    const totalGuestsEl = document.getElementById('totalGuests');

    async function fetchTotalGuests() {
        try {
            const supabase = window.weddingSupabase;

            const { data, error } = await supabase
                .from('rsvp')
                .select('guests');

            if (error) {
                throw error;
            }

            const total = data.reduce((sum, row) => sum + row.guests, 0);
            totalGuestsEl.textContent = total;

        } catch (error) {
            console.error('获取人数失败:', error);
        }
    }

    function subscribeToChanges() {
        const supabase = window.weddingSupabase;

        supabase
            .channel('rsvp-changes')
            .on('postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'rsvp' },
                (payload) => {
                    console.log('新RSVP:', payload.new);
                    // 重新获取总数
                    fetchTotalGuests();
                }
            )
            .subscribe((status) => {
                console.log('Realtime订阅状态:', status);
            });
    }

    // 初始加载人数
    fetchTotalGuests();

    // 订阅实时更新
    subscribeToChanges();
})();
