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
    console.log("ok");
    $("#m_1up_game_fail_again").hide();
    $("#m_1up_game_success_coupon").hide();
    $("#m_2up_game_hand").hide();
    $("#m_1up_game_contents").hide();
    $("#m_1up_game_fail_coupon").hide();
    $("#m_1up_game_number").hide();
    $("#m_2up_game_number").hide();
    $("#m_2up_game_time").hide();
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
            TweenMax.to($("#m_1up_game_start_contents"), 0.2, {
                scaleX: 0,
                scaleY: 0
            });

            $("#m_2up_game_number").show();
            $("#m_2up_game_time").show();
            $("#m_2up_game_hand").show();
            $("#m_1up_game_contents").show();

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
            TweenMax.from($("#m_1up_game_contents"), 0.2, {
                scaleX: 0,
                scaleY: 0,
                delay: 0.2
            });


            TweenMax.from($("#m_2up_game_hand"), 0.2, {
                top: 907,
                delay: 0.2,
                onComplete: function () {
                    _countdown.restart();
                    _handshak.restart();

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

            if (parseInt($("#m_2up_game_number").text(), 10) >= 50) {

                //success
                $("#m_1up_game_success_coupon").show();
                $("#m_1up_game_contents").hide();
                $("#m_2up_game_hand").hide();
                //window.location="m_2up_result_me.html";
            } else {
                //fail
                
                $("#m_1up_fail_total_remark_more").text(50-parseInt($("#m_2up_game_number").text(), 10));
                
                $("#m_1up_game_fail_coupon").show();
                $("#m_1up_game_fail_again").show();
                $("#m_1up_game_contents").hide();
                $("#m_2up_game_hand").hide();
                //window.location="m_2up_fail.html";
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


    $("#m_1up_game_start_start").click(function () {
        _3countdownTimeLine.restart();
        $("#m_1up_game_start_start").hide();
    });

    $("#m_1up_game_fail_again").click(function () {
        _time = 59;
        $("#m_2up_game_number").text("0");
        $("#m_2up_game_countdown").text("3");
        $("#m_2up_game_time").text("00:60");
        _3countdownTimeLine.restart();
        
        $("#m_1up_game_fail_coupon").hide();
        $("#m_1up_game_fail_again").hide();
        $("#m_2up_game_number").hide();
        $("#m_2up_game_time").hide();
        
       /* $("#m_1up_game_start_start").hide();
        $("#m_1up_game_success_coupon").hide();
        $("#m_2up_game_hand").hide();
        $("#m_1up_game_contents").hide();
        $("#m_1up_game_number").hide();
        */
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

            //console.log("preload onCompleted");
        }
    };
    $("body").queryLoader2(_options);


});