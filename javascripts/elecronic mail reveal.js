// js/script.js

/**
 * Ez a függvény fut le automatikusan, ha a látogató sikeresen 
 * kipipálja a Google reCAPTCHA ellenőrzést.
 * @param {string} token - A Google által visszaadott biztonsági token
 */
function Reveal_secure_electronic_mail(token) {
    // Megkeressük a táblázatban az email helyét biztosító cellát
    const emailCell = document.getElementById('secure-email-cell');
    
    if (emailCell) {
        // Biztonságosan beillesztjük a valódi e-mail címet és a mailto linket
        emailCell.innerHTML = '<a href="mailto:examplemail@google.com">examplemail@google.com</a>';
    }
    
    // Megkeressük a CAPTCHA dobozt
    const captchaWrapper = document.querySelector('.captcha-wrapper');
    
    if (captchaWrapper) {
        // Elrejtjük a CAPTCHA-t a sikeres ellenőrzés után, hogy letisztultabb legyen az oldal
        captchaWrapper.style.display = 'none';
    }
}
