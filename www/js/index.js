function changeIMG() {
    var imgnum = Math.floor(Math.random()*9)+1;
    if(imgnum === 2){
        $(document).ready(function () {
            $(".main_location").css("right","20%");
        })
    }else if(imgnum === 7){
        $(document).ready(function () {
            $(".main_location").css("right","20%");
            $(".card").css("background","rgba(192,192,192,0.7)");
        })
    }else if(imgnum === 4){
        $(document).ready(function () {
            $(".main_location").css("left","20%");
            $(".card").css("box-shadow","0px 0px 20px rgba(0,0,0,0.4)");
        })
    }else{
        $(document).ready(function () {
            $(".main_location").css("left","20%");
        })
    }
    document.getElementById('backimg').style.backgroundImage="url(/img/background" + imgnum + ".jpg)"
    imgnum = null;
}
changeIMG()

function toOne() {
    location.reload();
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
sleep(100).then(() => {
    let divTyping = document.getElementById('text_01')
    let i = 0,
        timer = 0,
        str = 'minloha.cn'
    function typing () {
        if (i <= str.length) {
            divTyping.innerHTML = str.slice(0, i++) + '|'
            timer = setTimeout(typing, 200)
        }
        else {
            divTyping.innerHTML = str
            clearTimeout(timer)
        }
    }
    typing()
})

$(document).ready(function () {
    $(".main_location").hide();
    $(".main_location").fadeIn(1000);
    $(".logo_1").click(function () {
        $(".logo_1").fadeOut();
        sleep(500).then(() => {
            $(".logo_1").fadeIn();
            window.location.href = "https://www.minloha.cn"
        })
    });
    $(".logo_2").click(function () {
        $(".logo_2").fadeOut();
        sleep(500).then(() => {
            $(".logo_2").fadeIn();
            window.location.href = "https://pan.minloha.cn"
        })
    })
    $(".logo_3").click(function () {
        $(".logo_3").fadeOut();
        sleep(500).then(() => {
            $(".logo_3").fadeIn();
            window.location.href = "https://github.com/iMinloha"
        })
    })
    $(".logo_4").click(function () {
        $(".logo_4").fadeOut();
        sleep(500).then(() => {
            $(".logo_4").fadeIn();
            window.location.href = "https://space.bilibili.com/360964504"
        })
    })
    $(".logo_5").click(function () {
        $(".logo_5").fadeOut();
        sleep(500).then(() => {
            $(".logo_5").fadeIn();
            window.location.href = "https://www.youtube.com/channel/UCODWz4jeDuSrWdKwSj6Aa3w"
        })
    })
    $(".logo_6").click(function () {
        $(".logo_6").fadeOut();
        sleep(500).then(() => {
            $(".logo_6").fadeIn();
            window.location.href = "https://user.qzone.qq.com/2821163570/infocenter"
        })
    })
})