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
    $("#preloading").fadeOut();
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

    var flakes = [],
        flakeCount = 250,
        mX = -100,
        mY = -100,
        snow_width = 1260,
        snow_height = 420;

    var snowInit = function () {
        for (var i = 0; i < flakeCount; i++) {
            var x = Math.floor(Math.random() * snow_width),
                y = Math.floor(Math.random() * snow_height),
                size = (Math.random() * 3) + 2,
                speed = (Math.random() * 1) + 0.5,
                opacity = (Math.random() * 0.5) + 0.3;
            skin = getRandomInt(1, 8);
            $("#snow").append('<div id="snow' + (i + 1) + '" class="snow' + skin + '"></div>');
            flakes.push({
                skin: $("#snow" + (i + 1)),
                speed: speed,
                velY: speed,
                velX: 0,
                x: x,
                y: y,
                size: size,
                stepSize: (Math.random()) / 30,
                step: 0,
                opacity: opacity
            });
        }
    }
    var snow = function () {

        for (var k = 0; k < flakeCount; k++) {
            var flake = flakes[k],
                x = 0,
                y = 0,
                minDist = 150,
                x2 = flake.x,
                y2 = flake.y;

            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y;

            if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;

                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;

            } else {
                flake.velX *= .98;
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed
                }
                flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
            }


            flake.y += flake.velY;
            flake.x += flake.velX;
            
            

            if (flake.y >= snow_height - getRandomInt(90,180) || flake.y <= 0) {
                if (flake.opacity > 0) {
                    flake.opacity = flake.opacity - 0.01;
                };

            }

            if (flake.y >= snow_height || flake.y <= 0) {
                reset(flake);
            }


            if (flake.x >= snow_width || flake.x <= 0) {
                reset(flake);
            }


            flake.skin.css({
                left: flake.x + "px",
                top: flake.y + "px",
                opacity: flake.opacity
            });


        }
    }

    function reset(flake) {
        flake.x = Math.floor(Math.random() * snow_width);
        flake.y = 0;
        flake.size = (Math.random() * 3) + 2;
        flake.speed = (Math.random() * 1) + 0.5;
        flake.velY = flake.speed;
        flake.velX = 0;
        flake.opacity = 1;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    snowInit();
    setInterval(function () {
        snow();
    }, 30);
    
    
    var _fram1 = [[0,0,117,143,0,2.8,16.05],[117,0,117,143,0,2.8,16.05],[234,0,117,143,0,2.8,16.05],[351,0,117,143,0,2.8,16.05],[468,0,117,143,0,2.8,16.05],[585,0,117,143,0,2.8,16.05],[702,0,117,143,0,2.8,16.05],[819,0,117,143,0,2.8,16.05],[0,143,117,143,0,2.8,16.05],[117,143,117,143,0,2.8,16.05],[234,143,117,143,0,2.8,16.05],[351,143,117,143,0,2.8,16.05],[468,143,117,143,0,2.8,16.05],[585,143,117,143,0,2.8,16.05],[702,143,117,143,0,2.8,16.05],[819,143,117,143,0,2.8,16.05],[0,286,117,143,0,2.8,16.05],[117,286,117,143,0,2.8,16.05],[234,286,117,143,0,2.8,16.05],[351,286,117,143,0,2.8,16.05],[468,286,117,143,0,2.8,16.05],[585,286,117,143,0,2.8,16.05],[702,286,117,143,0,2.8,16.05]];
    
   var _fram2 = [[0,0,134,142,0,28.85,15.95],[134,0,134,142,0,28.85,15.95],[268,0,134,142,0,28.85,15.95],[402,0,134,142,0,28.85,15.95],[536,0,134,142,0,28.85,15.95],[670,0,134,142,0,28.85,15.95],[804,0,134,142,0,28.85,15.95],[0,142,134,142,0,28.85,15.95],[134,142,134,142,0,28.85,15.95],[268,142,134,142,0,28.85,15.95],[402,142,134,142,0,28.85,15.95],[536,142,134,142,0,28.85,15.95],[670,142,134,142,0,28.85,15.95],[804,142,134,142,0,28.85,15.95],[0,284,134,142,0,28.85,15.95],[134,284,134,142,0,28.85,15.95],[268,284,134,142,0,28.85,15.95],[402,284,134,142,0,28.85,15.95],[536,284,134,142,0,28.85,15.95],[670,284,134,142,0,28.85,15.95],[804,284,134,142,0,28.85,15.95],[0,426,134,142,0,28.85,15.95],[134,426,134,142,0,28.85,15.95]]

    var setAnimation = function (_target,_fram) {
        var _animation = new TimelineMax({
            paused: true,
            repeat:9999
        });
        var _x = 0;
        var _y = 0;
        var _time = 0;       
        for (var i = 0; i < _fram.length; i++) {
            _time = 1 / 30 * i;
            _x = _fram[i][0] + "";
            _y = _fram[i][1] + "";
            _animation.to(_target, 0, {
                ease: Linear.easeNone,
                css: {
                    backgroundPosition: "-" + _x + "px " + "-" + _y + "px"
                }
            }, _time + "");
        };
        return _animation;
    };
    
    var _partyOn1Animation = setAnimation($('#play_game_1up'),_fram1);
    var _partyOn2Animation = setAnimation($('#play_game_2up'),_fram2);
    

    $("#play_game_1up").mouseover(function(){
        _partyOn1Animation.restart();
    });
    $("#play_game_1up").mouseout(function(){
        _partyOn1Animation.stop();
    });
    
    
     $("#play_game_2up").mouseover(function(){
        _partyOn2Animation.restart();
    });
    $("#play_game_2up").mouseout(function(){
        _partyOn2Animation.stop();
    });

});