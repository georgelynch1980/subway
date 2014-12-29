//
//   █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
// ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
// ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
// ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
// ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
//  ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
//  ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
//  ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
//           ░     ░ ░      ░  ░
//   
$(document).ready(function () {
    $("#login_fb").click(function () {

    });




    TweenMax.set($("#title"), {
        css: {
            transformPerspective: 500,
            perspective: 500,
            transformStyle: "preserve-3d"
        }
    });
    TweenMax.set($("#use"), {
        css: {
            transformPerspective: 500,
            perspective: 500,
            transformStyle: "preserve-3d"
        }
    });
    

    var tl = new TimelineMax({
        paused: true,
        onComplete: timelineDone
    });


    tl.fromTo($("#title"), 0.4, {
        top: 121,
        opacity: 0.0,
        rotationY: 180
    }, {
        autoAlpha: 1,
        top: 121,
        rotationY: 0
    });
    tl.fromTo($("#use"), 0.4, {
        top: 308,
        opacity: 0.0,
        rotationY: 180
    }, {
        autoAlpha: 1,
        top: 308,
        rotationY: 0
    }, "0.2");
    tl.from($("#step1"), 0.5, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut
    }, "0.2");
    tl.from($("#step2"), 0.5, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut
    }, "-=0.2");
    tl.from($("#step3"), 0.5, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut
    }, "-=0.2");
    tl.from($("#login_fb"), 0.5, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut
    }, "-=0.2");


    tl.restart();

    function timelineDone() {

    }
});