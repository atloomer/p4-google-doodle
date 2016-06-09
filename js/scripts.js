// Animate Star
//var $star = $('#star');


// DOM Element, Duration, Properties
//TweenMax.to($star, 1, {
//    opacity: 0,
//    x: 200
//});


var tl1 = new TimelineMax();

tl1.from('#drawer', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=.22')
tl1.from('#leg', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=.22')
tl1.from('.desk-top', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=.22')
tl1.from('#Stand_1_', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '=.15')
tl1.from('#iMac_bottom_base_1_', 0.3, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=.22')
tl1.from('#Shadow_5_', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=0.4')
tl1.from('#Apple_1_', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=0.4')
tl1.from('#iMac_base_1_', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut })
tl1.from('#comp-screen', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=0.4')
tl1.from('#mouse', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Back.easeOut }, '-=.22')
tl1.from('.coffee', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Power3.easeOut }, '-=.22')
tl1.from('.lamp', 0.4, {x:0, y:-60, z:0, opacity: 0, ease: Power2.easeOut }, '-=.22')
tl1.from('#light', 0.1, { opacity: 0 }, '=.75')
tl1.from('#bg-color', .7, { fill: '#384561' }, '=.1')
tl1.from('#comp-screen', .6, { fill: '#2d2d2d' }, '=-.1')
tl1.from('#vcd-text-01', .2, { opacity: 0 })
tl1.from('#vcd-text-02', .2, { opacity: 0 })
tl1.from('#vcd-text-03', .2, { opacity: 0 })
tl1.from('#vcd-text-04', .2, { opacity: 0 }, '=.25')
tl1.from('#vcd-text-05', .2, { opacity: 0 })
tl1.from('#vcd-text-06', .2, { opacity: 0 })
tl1.from('#vcd-text-07', .2, { opacity: 0 }, '=.14');

var tl2 = new TimelineMax({ delay: 3, repeat: -1 });

tl2.from('.steam', 1, {x:0, y:2, z:0, opacity: 0, ease: Power0.easeOut }, '-=.5')
tl2.to('.steam', 1.4, {x:0, y:-2.5, z:0, opacity: 0, ease: Power0.easeOut });
