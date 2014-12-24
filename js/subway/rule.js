$(document).ready(function () {
    console.log("ready!!!");
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
            $('#contents').tinyscrollbar({
                trackSize: 395,
                thumbSize: 13
            });
        }
    };
    $("body").queryLoader2(_options);



});