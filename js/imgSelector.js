$(function(){
    var ImgPath = "../img/orange_";
    for(var i = 0;i<3;i++)
    {
        for(var j = 0;j<3;j++)
        {
            $(".box").append("<img class='img' src=" + ImgPath+(i*3+j+1)+".png" + ">");
            $(".box").append("<div class='bg'></div>");
            $(".bg").css({
                position:"absolute",
                float:"left",
                top:"0rem",
                left:"0.6rem",
                marginLeft:"2rem",
                marginTop:".3rem",
                height:"3.2rem",
                width:"3.2rem",
                backgroundColor:"#000",
                zIndex:0,
            });

        }
    }
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            $(".bg").eq(i*3+j).css("left",0.6+j*5.2+"rem");
            $(".bg").eq(i*3+j).css("top",i*3.5+"rem");
        }
    }
    $(".box").css({
        position:"absolute",
        top:"10%",
        left:"10%",
        height:"80%",
        width:"80%",
    });
    $(".img").css({
        position:"relative",
        float:"left",
        top:"0rem",
        left:".6rem",
        marginLeft:"2rem",
        marginTop:".3rem",
        height:"3.2rem",
        width:"3.2rem",
        style:"border:1px #000 solid",
        zIndex:9999,
        cursor: "pointer",
    })
    $(".img").on("mouseover",function(e){
        $(e.target).stop().fadeTo("fast",1);
        $(e.target).siblings().stop().fadeTo("fast",0.3);
    })
    $(".box").on("mouseleave",function(e){
        $(".img").siblings().stop().fadeTo("fast",1);
    })
})