// ==UserScript==
// @name         unipollauto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  f*ck that sh*t
// @author       simko.me
// @match        https://*neptun*/*unipoll*/*
// @match        https://neptun1.uni-bge.hu/unipoll/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    $.each($('.questionTableWrap'), function(){
        let lastRadio = $('.questiontable-contentcell').find('.rbDiv:last-child').find('input[type=radio]');
        lastRadio.prop('checked', true);
    });
})();
