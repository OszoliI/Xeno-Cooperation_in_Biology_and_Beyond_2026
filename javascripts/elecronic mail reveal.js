function _sysDecode(_str) {
    const _k = 42;
    let _r = '';
    for (let _i = 0; _i < _str.length; _i++) {
        _r += String.fromCharCode(_str.charCodeAt(_i) ^ _k);
    }
    return _r;
}

function initializeSecureData(token) {
    const _targetClass = ['.', 'secure', '-', 'cell'].join('');
    const cells = document.querySelectorAll(_targetClass);
    
    cells.forEach(cell => {
        const _attrName = 'data';
        const encodedData = cell.getAttribute(_attrName);
        
        if (encodedData) {
            try {
                const stage1 = window.atob(encodedData.trim());
                const realEmail = _sysDecode(stage1);
                
                cell.innerHTML = '<a href="mailto:' + realEmail + '">' + realEmail + '</a>';
            } catch (e) {
                console.error("Decoding issue:", e);
                cell.innerHTML = 'Error';
            }
        }
    });
    
    const wrapper = document.querySelector('.captcha-wrapper');
    if (wrapper) {
        wrapper.style.display = 'none';
    }
}