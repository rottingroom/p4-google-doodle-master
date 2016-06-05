// Animate Star
var $vcd = $('#vcd');
var $vcdlogo = $('#vcdlogo');
var $vcdshadow = $('#vcdshadow');
var $V = $('.V');
var $C = $('.C');
var $D = $('.D');
var $Vshadow = $('.Vshadow');
var $Cshadow = $('.Cshadow');
var $Dshadow = $('.Dshadow');
var $stars = $('.stars')

TweenMax.from($V, 1, {
    opacity: 0,
    scale: 0.1
});

TweenMax.from($Vshadow, 1, {
    opacity: 0,
    delay: .5,
});

TweenMax.from($C, 1, {
    opacity: 0,
    delay: 1,
    scale: 0.1
});

TweenMax.from($Cshadow, 1, {
    opacity: 0,
    delay: 1.5,
});

TweenMax.from($D, 1, {
    opacity: 0,
    delay: 2,
    scale: 0.1
});

TweenMax.from($Dshadow, 1, {
    opacity: 0,
    delay: 2.5,
});

TweenMax.staggerFrom($stars, 2, {
    opacity: 0,
    delay: 2
}, 0.2);

TweenMax.staggerTo($stars, 2, {
    opacity: 0,
    delay: 3
}, 0.2);