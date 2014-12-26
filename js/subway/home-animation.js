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
    //----------------------------preload---------------------------------------------------
    var _options = {
        barHeight: 0,
        percentage: true,
        onProgress: function (e) {
            //console.log(e);
        },
        onComplete: function () {
            $("#preloading").fadeOut();
            //console.log("preload onCompleted");
        }
    };
    $("body").queryLoader2(_options);

    var _rotation = function (_target, _pageX, _pageY, _degree) {
        TweenMax.set(_target, {
            css: {
                transformPerspective: 500,
                perspective: 500,
                transformStyle: "preserve-3d"
            }
        });
        var _half_width = $('body').width() * 0.5;;
        var _half_height = $('body').height() * 0.5;

        var mouse_x = _pageX;
        var mouse_y = _pageY;
        var radiansX = Math.atan2(mouse_x - _half_width, _half_width);
        var degreeX = (radiansX * (_degree / Math.PI));


        var radiansY = Math.atan2(mouse_y - _half_height, _half_height);
        var degreeY = -(radiansY * (_degree / Math.PI));

        //console.log(degree)
        TweenMax.to(_target, 1.5, {
            rotationY: degreeX,
            rotationX: degreeY,
            ease: Elastic.easeOut
        });

    };

    _rotation($("#card"), $('body').width() * 0.5, $('body').height() * 0.5, 15);
    _rotation($("#product"), $('body').width() * 0.5, $('body').height() * 0.5, 7);

    $('body').mousemove(function (event) {

        _rotation($("#card"), event.pageX, event.pageY, 15);
        _rotation($("#product"), event.pageX, event.pageY, 7);

    });
});