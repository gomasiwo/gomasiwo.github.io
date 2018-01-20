// import文を使ってSassファイルを読み込む。
import "../css/index.scss"
import $ from 'jquery'

const Chaffle = require("chaffle")

$(function () {
    var elements = document.querySelectorAll('[data-chaffle]');
    var elm = document.querySelectorAll('[data-chaffle-onLoad]');

    Array.prototype.forEach.call(elements, function (el) {
        var chaffle = new Chaffle(el)
        el.addEventListener('mouseover', function () {
            chaffle.init();
        });
    });

    Array.prototype.forEach.call(elm, function (el) {
        var chaffle = new Chaffle(el, {
            delay: 200
        })
        setInterval(function () {
            chaffle.init();
        }, 8000)
    });
});

$(function () {
    $('#wapper').css('display', 'none');
    $('#loading').css('display', 'none');
})

$(window).load(function () {
    $('#wapper').css('display', 'flex');
    $('#loading').css('display', 'none');
})
