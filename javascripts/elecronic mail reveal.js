// js/script.js - Bot-ellenálló, XOR-42 + Base64 ultragyors dekódolóval
(function(_0x51a2, _0x2c3b) {
    const _0x4d5e = _0x51a2();
    while (!![]) {
        try {
            const _0x3a2b = parseInt(_0x1f2e(0x1)) / 1 + parseInt(_0x1f2e(0x2)) / 2 + (-parseInt(_0x1f2e(0x3)) / 3) * (parseInt(_0x1f2e(0x4)) / 4) + parseInt(_0x1f2e(0x5)) / 5 + -parseInt(_0x1f2e(0x6)) / 6 + parseInt(_0x1f2e(0x7)) / 7 + -parseInt(_0x1f2e(0x8)) / 8;
            if (_0x3a2b === _0x2c3b) break; else _0x4d5e['push'](_0x4d5e['shift']());
        } catch (_0x6f1a) {
            _0x4d5e['push'](_0x4d5e['shift']());
        }
    }
}(_0x1122, 0x3d0b5));

function _0x1122() {
    const _0x8899 = ['4645236XvIqcG', '1251944yOQZfI', '7651048bXzVvF', '1406852VvDsyj', '174GvXwIe', '38450fOQpZE', '241160DOfFrc', '11831888bYwKQU', 'querySelectorAll', '.secure-email-cell', 'data-email', 'innerHTML', '<a\x20href=\x22mailto:', '\x22>', '</a>', '.captcha-wrapper', 'style', 'display', 'none'];
    _0x1122 = function() { return _0x8899; };
    return _0x1122();
}

function _0x1f2e(_0x1122_inner) {
    const _0x1122_alias = _0x1122();
    return _0x1f2e = function(_0x1f2e_inner) {
        _0x1f2e_inner = _0x1f2e_inner - 0x1;
        return _0x1122_alias[_0x1f2e_inner];
    }, _0x1f2e(_0x1122_inner);
}

// ULTRAGYORS XOR DEKÓDOLÓ FÜGGVÉNY (Hardveres szintű sebesség)
function _fastXOR(_0xstr) {
    const _key = 42; // Titkos kulcs
    let _res = '';
    for (let _i = 0; _i < _0xstr.length; _i++) {
        // Bitenkénti XOR művelet (^) végrehajtása
        _res += String.fromCharCode(_0xstr.charCodeAt(_i) ^ _key);
    }
    return _res;
}

// Fő függvény, amit a Google reCAPTCHA hív meg
function Reveal_secure_electronic_mail(_0xtoken) {
    const _0xcells = document[_0x1f2e(0x9)](_0x1f2e(0xa));
    
    _0xcells['forEach'](function(_0xcell) {
        const _0xdata = _0xcell['getAttribute'](_0x1f2e(0xb));
        if (_0xdata) {
            try {
                // 1. lépés: Base64 visszafejtés
                const _0xbase64Decoded = window['atob'](String(_0xdata)['trim']());
                // 2. lépés: Ultragyors bitenkénti XOR dekódolás a valódi emailhez
                const _0xrealEmail = _fastXOR(_0xbase64Decoded);
                
                // HTML tartalom biztonságos injektálása
                _0xcell[_0x1f2e(0xc)] = _0x1f2e(0xd) + _0xrealEmail + _0x1f2e(0xe) + _0xrealEmail + _0x1f2e(0xf);
            } catch (_0xerr) {
                _0xcell[_0x1f2e(0xc)] = 'Error';
            }
        }
    });
    
    const _0xwrap = document['querySelector'](_0x1f2e(0x10));
    if (_0xwrap) {
        _0xwrap[_0x1f2e(0x11)][_0x1f2e(0x12)] = _0x1f2e(0x13);
    }
}

/* 
  TIPP ÚJ EMAIL GENERÁLÁSÁHOZ (XOR 42 + Base64):
  Nyisd meg a böngésző konzolját (F12), és futtasd ezt a sort az új email címeddel:
  btoa(Array.from('uj.email@gmail.com').map(c => String.fromCharCode(c.charCodeAt(0) ^ 42)).join(''))
*/
