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



    $("#m_2up_game_number").hide();
    $("#m_2up_game_time").hide();
    $("#m_2up_game_hand").hide();
    var _handshak = new TimelineMax({
        repeat: 9999,
        paused: true,
        yoyo: true
    });
    _handshak.to($("#m_2up_game_hand"), 0.5, {
        rotation: 50,
        left: "+=50"
    });
    _handshak.to($("#m_2up_game_hand"), 0.5, {
        rotation: -0,
        left: "-=50"
    });
    _handshak.to($("#m_2up_game_hand"), 0.5, {
        rotation: 45,
        left: "+=50"
    });


    var shakeHandler = function () {
        var _current = parseInt($("#m_2up_game_number").text(), 10);
        _current++;
        // alert("shake"+_current);
        $("#m_2up_game_number").text(_current);
    }

    var _3countdownTimeLine = new TimelineMax({
        paused: true,
        onComplete: function () {
            //play

            TweenMax.to($("#m_2up_game_contents"), 0.2, {
                scaleX: 0,
                scaleY: 0
            });
            TweenMax.to($("#m_2up_game_countdown"), 0.2, {
                scaleX: 0,
                scaleY: 0
            });
            TweenMax.to($("#m_2up_game_ico"), 0.2, {
                scaleX: 0,
                scaleY: 0
            });


            $("#m_2up_game_number").show();
            $("#m_2up_game_time").show();
            $("#m_2up_game_hand").show();

            TweenMax.from($("#m_2up_game_number"), 0.2, {
                scaleX: 0,
                scaleY: 0,
                delay: 0.2
            });
            TweenMax.from($("#m_2up_game_time"), 0.2, {
                scaleX: 0,
                scaleY: 0,
                delay: 0.2
            });
            TweenMax.from($("#m_2up_game_hand"), 0.2, {
                top: 907,
                delay: 0.2,
                onComplete: function () {
                    _countdown.play();
                    _handshak.play();

                    window.addEventListener('shake', shakeHandler, false);
                }
            });

        }
    });



    TweenMax.set($("#m_2up_game_countdown"), {
        scaleX: 0,
        scaleY: 0
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 1, {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: Back.easeOut
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 0, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut,
        onComplete: function () {
            $("#m_2up_game_countdown").text("2");
        }
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 1, {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: Back.easeOut
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 0, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut,
        onComplete: function () {
            $("#m_2up_game_countdown").text("1");
        }
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 1, {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: Back.easeOut
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 0, {
        scaleX: 0,
        scaleY: 0,
        ease: Back.easeOut,
        onComplete: function () {
            $("#m_2up_game_countdown").text("GO");
        }
    });
    _3countdownTimeLine.to($("#m_2up_game_countdown"), 0.7, {
        scaleX: 1.5,
        scaleY: 1.5,
        ease: Back.easeOut
    });


    var _time = 59;
    var _countdown = new TimelineMax({
        repeat: 59,
        paused: true,
        onComplete: function () {
            //console.log("ok~~~~~~~~~~~~")
            _countdown.stop();
            _handshak.stop();
            window.removeEventListener('shake', shakeHandler, false);
            
            
            if(parseInt($("#m_2up_game_number").text(), 10)>50){
                //success
                window.location="m_2up_result_me.html";
            }else{
                //fail
                window.location="m_2up_fail.html";
            }
        }
    });

    _countdown.to($("#m_2up_game_time"), 1, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        onComplete: function () {
            var time = _time.toString();
            if (_time < 10) time = "0" + _time.toString();

            $("#m_2up_game_time").text("00:" + time);
            _time--;
        }
    });

    //----------------------------preload---------------------------------------------------
    var _options = {
        barHeight: 0,
        percentage: true,
        onProgress: function (e) {
            //console.log(e);
        },
        onComplete: function () {
            $("#preloading").fadeOut();
            _3countdownTimeLine.play();
            //console.log("preload onCompleted");
        }
    };
    $("body").queryLoader2(_options);
    

});