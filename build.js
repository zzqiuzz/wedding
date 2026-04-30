#!/usr/bin/env node

/**
 * Build script for wedding website
 * Replaces placeholder values with environment variables
 */

const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');

// Read environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key';
const amapApiKey = process.env.AMAP_API_KEY || 'YOUR_AMAP_API_KEY';

// Read index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace Supabase placeholders
html = html.replace(
    /window\.SUPABASE_URL\s*=\s*window\.SUPABASE_URL\s*\|\|\s*'[^']*'/g,
    `window.SUPABASE_URL = window.SUPABASE_URL || '${supabaseUrl}'`
);
html = html.replace(
    /window\.SUPABASE_ANON_KEY\s*=\s*window\.SUPABASE_ANON_KEY\s*\|\|\s*'[^']*'/g,
    `window.SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '${supabaseAnonKey}'`
);

// Replace AMap API key
html = html.replace(
    /webapi\.amap\.com\/maps\?v=2\.0&key=[^"]*/g,
    `webapi.amap.com/maps?v=2.0&key=${amapApiKey}`
);

// Write back
fs.writeFileSync(indexHtmlPath, html, 'utf8');

console.log('Build complete: Environment variables injected into index.html');
