const _0x9a2b=['\x64\x61\x74\x61','\x74\x72\x69\x6d','\x61\x74\x6f\x62','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72\x41\x6c\x6c','\x2e\x73\x65\x63\x75\x72\x65\x2d\x63\x65\x6c\x6c','\x66\x6f\x72\x45\x61\x63\x68','\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65','\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c','\x3c\x61\x20\x68\x72\x65\x66\x3d\x22\x6d\x61\x69\x6c\x74\x6f\x3a','\x22\x3e','\x3c\x2f\x61\x3e','\x45\x72\x72\x6f\x72','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x2e\x63\x61\x70\x74\x63\x68\x61\x2d\x77\x72\x61\x70\x70\x65\x72','\x73\x74\x79\x6c\x65','\x64\x69\x73\x70\x6c\x61\x79','\x6e\x6f\x6e\x65','\x6c\x65\x6e\x67\x74\x68','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'];

function _0x3b8d(_0x1f2){
    let _0x4d5 = (0x54 >> 1);
    let _0x5e6 = '';
    let _0xidx = (0x1 >> 1);
    
    while (_0xidx < _0x1f2[_0x9a2b[(0x22 >> 1)]]) { 
        let _0xchar = _0x1f2[_0x9a2b[(0x26 >> 1)]](_0xidx);
        
        let _0x7b3 = (_0xchar | _0x4d5) & ~(_0xchar & _0x4d5);
        
        if (((_0xidx << 3) >> 3) !== _0xidx) {
            _0x5e6 += String[_0x9a2b[(0x24 >> 1)]]((0x4 << 2) | _0x7b3);
        } else {
            _0x5e6 += String[_0x9a2b[(0x24 >> 1)]](_0x7b3);
        }
        _0xidx = _0xidx + 1;
    }
    return _0x5e6;
}

function initializeSecureData(_0x7a8){
    let _0xstate = (0x1 >> 1); 
    var _0x8b9, _0xe1f;

    while(_0xstate !== (0x10 >> 1)) {
        switch(_0xstate) {
            case (0x1 >> 1): 
                _0x8b9 = document[_0x9a2b[(0x6 >> 1)]](_0x9a2b[(0x8 >> 1)]);
                _0xstate = (0x3 >> 1);
                break;
                
            case (0x3 >> 1): 
                if (_0x8b9) {
                    _0xstate = (0x4 >> 1);
                } else {
                    _0xstate = (0x10 >> 1);
                }
                break;
                
            case (0x4 >> 1): 
                _0x8b9[_0x9a2b[(0xA >> 1)]](_0x9ca => {
                    let _0xinnerState = (0x1 >> 1);
                    var _0xadb;
                    
                    while(_0xinnerState !== (0x8 >> 1)) { 
                        if (_0xinnerState === (0x1 >> 1)) {
                            _0xadb = _0x9ca[_0x9a2b[(0xC >> 1)]](_0x9a2b[(0x1 >> 1)]);
                            _0xinnerState = (0x3 >> 1);
                        } else if (_0xinnerState === (0x3 >> 1)) {
                            if (_0xadb) { 
                                _0xinnerState = (0x4 >> 1); 
                            } else { 
                                _0xinnerState = (0x8 >> 1); 
                            }
                        } else if (_0xinnerState === (0x4 >> 1)) {
                            try {
                                let _0xbec = window[_0x9a2b[(0x4 >> 1)]](_0xadb[_0x9a2b[(0x3 >> 1)]]());
                                let _0xcfd = _0x3b8d(_0xbec);
                                _0x9ca[_0x9a2b[(0xE >> 1)]] = _0x9a2b[(0x10 >> 1)] + _0xcfd + _0x9a2b[(0x12 >> 1)] + _0xcfd + _0x9a2b[(0x14 >> 1)];
                            } catch(_0xd0e) {
                                _0x9ca[_0x9a2b[(0xE >> 1)]] = _0x9a2b[(0x16 >> 1)];
                            }
                            _0xinnerState = (0x8 >> 1); 
                        }
                    }
                });
                _0xstate = (0x6 >> 1);
                break;
                
            case (0x6 >> 1): 
                _0xe1f = document[_0x9a2b[(0x18 >> 1)]](_0x9a2b[(0x1A >> 1)]);
                _0xstate = (0x8 >> 1);
                break;
                
            case (0x8 >> 1): 
                if (_0xe1f) {
                    _0xe1f[_0x9a2b[(0x1C >> 1)]][_0x9a2b[(0x1E >> 1)]] = _0x9a2b[(0x20 >> 1)];
                }
                _0xstate = (0x10 >> 1);
                break;
        }
    }
}