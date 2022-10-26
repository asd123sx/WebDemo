$(function(){
    var menuBar = $('<div class="menuBar"></div>')
    $("body").prepend(menuBar);
    $(menuBar).append($('<img class="title" src="../img/title.png"></img>'))
    var title = ["首页","栽培技术","药用价值","相关知识","新鲜橙子","留言板"];
    var titleClass = ["top","menu1","menu2","menu3","menu4","menu5"];
    for(var i =0;i<6;i++){
        $(menuBar).append($('<div class="menu"><span class="textLabel" style= "font-size:.25rem;"></span></div>'))
        $(".textLabel").eq(i).html(title[i]);
        $(".menu").eq(i).addClass(titleClass[i]);
    }
    var foot = $('<div class="foot"></div>');
    $("body").append(foot);
    $(foot).append($('<p class="foot-text" align="center">copyright©橙子之家</p>\
    <p class="foot-text" align="center" style="font-size: 12px;">Designed by 4iak (bilibili)\
    <a href="https://space.bilibili.com/442709221">https://space.bilibili.com/442709221</a></p>'));
})
$(function(){
    $("body").on("click",".menu:eq(0)",function(){
        location.assign("./index.html")
    })
    $("body").on("click",".menu:eq(1)",function(){
        location.assign("./page_1.html")
    })
    $("body").on("click",".menu:eq(2)",function(){
        location.assign("./page_2.html")
    })
    $("body").on("click",".menu:eq(3)",function(){
        location.assign("./page_3.html")
    })
    $("body").on("click",".menu:eq(4)",function(){
        location.assign("./page_4.html")
    })
    $("body").on("click",".menu:eq(5)",function(){
        location.assign("./page_5.html")
    })   
})
