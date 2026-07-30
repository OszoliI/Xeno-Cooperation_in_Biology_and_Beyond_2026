// js/script.js

/**
 * A Google reCAPTCHA sikeres teljesítése után fut le.
 * Végigmegy a cellákon, dekódolja a Base64-es adatot, és megjeleníti a linkeket.
 */
function Reveal_secure_electronic_mail(token) {
    // Összes titkosított e-mail cella kijelölése
    const emailCells = document.querySelectorAll('.secure-email-cell');
    
    emailCells.forEach(cell => {
        // Kiolvassuk a titkosított Base64 karakterláncot
        const encodedEmail = cell.getAttribute('data-email');
        
        if (encodedEmail) {
            try {
                // Biztonságos visszafejtés (atob) csak a kliens oldalán, a validálás után
                const decodedEmail = atob(encodedEmail);
                
                // HTML link generálása és beszúrása
                cell.innerHTML = `<a href="mailto:${decodedEmail}">${decodedEmail}</a>`;
            } catch (error) {
                console.error("Hiba történt az email dekódolása során:", error);
                cell.innerHTML = `<span style="color: red;">Decoding error</span>`;
            }
        }
    });
    
    // A CAPTCHA wrapper elrejtése a sikeres folyamat után
    const captchaWrapper = document.querySelector('.captcha-wrapper');
    if (captchaWrapper) {
        captchaWrapper.style.display = 'none';
    }
}
