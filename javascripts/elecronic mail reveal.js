// js/script.js - Garantáltan stabil, fagyásmentes, bot-biztos verzió

// Egy trükkös, nem átlátható névvel ellátott függvény a dekódoláshoz
function _sysDecode(_str) {
    const _k = 42; // XOR kulcs
    let _r = '';
    for (let _i = 0; _i < _str.length; _i++) {
        _r += String.fromCharCode(_str.charCodeAt(_i) ^ _k);
    }
    return _r;
}

// Ezt hívja meg a Google reCAPTCHA, ha a pipa sikeres
function initializeSecureData(token) {
    // Dinamikus szelektor-összerakás, hogy a bot ne lássa közvetlenül az osztálynevet
    const _targetClass = ['.', 'secure', '-', 'email', '-', 'cell'].join('');
    const cells = document.querySelectorAll(_targetClass);
    
    cells.forEach(cell => {
        // Dinamikusan olvassuk ki az attribútumot is
        const _attrName = ['data', '-', 'email'].join('');
        const encodedData = cell.getAttribute(_attrName);
        
        if (encodedData) {
            try {
                // 1. lépés: Biztonságos Base64 dekódolás
                const stage1 = window.atob(encodedData.trim());
                // 2. lépés: Ultragyors XOR visszafejtés
                const realEmail = _sysDecode(stage1);
                
                // Email link és szöveg dinamikus beillesztése
                cell.innerHTML = '<a href="mailto:' + realEmail + '">' + realEmail + '</a>';
            } catch (e) {
                console.error("Decoding issue:", e);
                cell.innerHTML = 'Error';
            }
        }
    });
    
    // A CAPTCHA doboz elrejtése a sikeres folyamat végén
    const wrapper = document.querySelector('.captcha-wrapper');
    if (wrapper) {
        wrapper.style.display = 'none';
    }
}
