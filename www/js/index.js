$(document).ready(function(){
    $(".windows").hide();
    $(".img").show();
    $(".main").hide();
});
window.onload =function(){
    $(document).ready(function(){
        $(".img").hide();
        $(".main").show();
    });
}
$(document).ready(function(){
    var time = 0;
    $("#btn").click(function () {
        time +=1;
        if(time%2==0){
            $("#windows").hide();
            //隐藏
        }else{
            $("#windows").attr({
                "src":"https://blog.minloha.cn",
                "style":"border-radius: 20px;",
                "width":"100%",
                "height":"170%",
            })
        }
    });
});