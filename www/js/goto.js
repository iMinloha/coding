function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
$(document).ready(function () {
    $(".mb_logo_1").click(function () {
        $(".mb_logo_1").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_1").fadeIn();
            window.location.href = "https://www.minloha.cn"
        })
    });
    $(".mb_logo_2").click(function () {
        $(".mb_logo_2").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_2").fadeIn();
            window.location.href = "https://pan.minloha.cn"
        })
    })
    $(".mb_logo_3").click(function () {
        $(".mb_logo_3").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_3").fadeIn();
            window.location.href = "https://github.com/iMinloha"
        })
    })
    $(".mb_logo_4").click(function () {
        $(".mb_logo_4").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_4").fadeIn();
            window.location.href = "https://space.bilibili.com/360964504"
        })
    })
    $(".mb_logo_5").click(function () {
        $(".mb_logo_5").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_5").fadeIn();
            window.location.href = "https://www.youtube.com/channel/UCODWz4jeDuSrWdKwSj6Aa3w"
        })
    })
    $(".mb_logo_6").click(function () {
        $(".mb_logo_6").fadeOut();
        sleep(500).then(() => {
            $(".mb_logo_6").fadeIn();
            window.location.href = "https://user.qzone.qq.com/2821163570/infocenter"
        })
    })
})