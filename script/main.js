$(function(){
    //메뉴
    $(".sub , .sub_bg").hide()
    $(".main>li , .sub_bg").hover(function(){
        $(".sub , .sub_bg").stop().slideDown()
    }, function(){
        $(".sub , .sub_bg").stop().slideUp()
    })

    //이미지 슬라이드
    var n=0

    setInterval(function(){
        if(n == 2){
            n=0
        }else{
            n++
        }
        console.log(n)

        $(".left_move").animate({left : n * (-1200) +"px"}, 500)
    }, 2000)

    //팝업

    $(".p_click").click(function(){
        $(".pop , .modal").show()
    })

    $(".close").click(function(){
        $(".pop , .modal").hide()
    })
})//jq end