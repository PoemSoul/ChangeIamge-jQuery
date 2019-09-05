$(function(){
    $(".img").fadeOut(0);
    $(".img").eq(0).fadeIn(2000);
    $(".controls ul li").eq(0).css("opacity","1");

    var interval=setInterval(changeImg,5000);
    //当前图片的索引
    
    var img_index=0;
    //实现轮播
    function changeImg(){
        img_index=++img_index % 4;
        $(".img").fadeOut(1000);
        $(".img").eq(img_index).fadeIn(2000);
        // $(".controls ul li").css("color","white");
        $(".controls ul li").eq(img_index).css("opacity","1");
        $(".controls ul li").eq(img_index).siblings().css("opacity","0.4");
        
    }

    $(".imglist").mouseover(function(){
        window.clearInterval(interval);
    })

    $(".imglist").mouseout(function(){
        interval=setInterval(changeImg,5000);
    })


    $(".controls ul li").click(function(){
        window.clearInterval(interval);
        img_index=$(this).index();
        $(".img").fadeOut(1000);
        $(".img").eq(img_index).fadeIn(2000);
        $(".controls ul li").eq(img_index).css("opacity","1");
        $(".controls ul li").eq(img_index).siblings().css("opacity","0.4");
        interval=setInterval(changeImg,5000);
    })

    $(".left").click(function(){
        window.clearInterval(interval);
        img_index--;
        if(img_index<0){
            img_index=3;
        }
        $(".img").fadeOut(1000);
        $(".img").eq(img_index).fadeIn(2000);
        $(".controls ul li").eq(img_index).css("opacity","1");
        $(".controls ul li").eq(img_index).siblings().css("opacity","0.4");
        interval=setInterval(changeImg,5000);
    })

    $(".right").click(function(){
        window.clearInterval(interval);
        img_index=++img_index % 4;
        $(".img").fadeOut(1000);
        $(".img").eq(img_index).fadeIn(2000);
        $(".controls ul li").eq(img_index).css("opacity","1");
        $(".controls ul li").eq(img_index).siblings().css("opacity","0.4");
        interval=setInterval(changeImg,5000);
    })
})
    
