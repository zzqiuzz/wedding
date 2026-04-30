// js/supabase.js
const SUPABASE_URL = 'https://cblflizixahljbdxboqg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XEsbeg0Ux2in8m52FT0HDg_7Kw97-Fa';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 导出供其他模块使用
window.weddingSupabase = supabase;
