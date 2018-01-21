import "../css/index.scss";
import $ from "jquery";
//import ballanime from "./ballanime";
window.$ = window.jQuery = $;

require("velocity-animate")

const Chaffle = require("chaffle");
//const ballanime = require("./ballanime").default

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

    $(".ball").velocity({
        translateY: '200px'
    }, {
        easing: 'ease-in-out',
        duration: 1000,
    }).velocity({
        translateY: '-200px'
    }, {
        easing: 'ease-in-out',
        duration: 1000,
        loop: true
    })

    $(".toggle").on("click", function () {
        $(this).toggleClass("on");
        $("nav ul").slideToggle();
    })

    $(window).resize(function () {
        var w = $(window).width();
        var h = $(window).height();
        var x = 768;
        if (w >= x) {
            $('nav ul').css({
                display: 'flex',
                height: 'auto'
            });
        } else {
            $('nav ul').css({
                display: 'none',
                height: h + 'px'
            });
        }
    });

});
