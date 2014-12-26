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


APP.game1copyurl = function (url) {


    APP.game1URL = url;

    var copy_sel = $('#copy_links');

    copy_sel.on('click', function (e) {
        if (APP.UserAgent.isLtIE9) {
            if (window.clipboardData && window.clipboardData.setData) {
                window.clipboardData.setData("Text", "冬天到了別發懶，快和我一起新鮮動吃動，一起拿買一送一優惠！" + APP.game1URL + "(請以手機開啟活動網址)");
                alert("連結複製完成！快貼給好友吧！");

            }
            return;
        } else {
            e.preventDefault();
        }
    });

    if (!APP.UserAgent.isLtIE9) {
        copy_sel.clipboard({
            path: 'js/jquery.clipboard.swf',

            copy: function () {

                return "冬天到了別發懶，快和我一起新鮮動吃動，一起拿買一送一優惠！" + APP.game1URL + "(請以手機開啟活動網址)";
            },
            afterCopy: function () {
                alert("連結複製完成！快貼給好友吧！");

            }
        });
    }
};

$(document).ready(function () {
    $("#share_links").text("http://google.com");
    APP.game1copyurl("http://google.com");

});