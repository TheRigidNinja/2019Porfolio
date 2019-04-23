

function ShowProject(e,projectType){
    const Properties = {
        size: (()=>{
            if($(window).width() > $(window).height()){
                return $(window).width()
            }else{
                return $(window).height()
            }
        })(),
        mouseY:  e.pageY,
        mouseX:  e.pageX,

    }

    $(".MoreInfo").css("display","block");
    // $(`.${projectType}`).animate({
    //     left:0,
    //     top:0,
    //     opacity: 1,
    //     // width: Properties.size,
    //     // height: Properties.size
    // },500)

    $(".Reveal").css({
        "left":Properties.mouseX+"px",
        "top":Properties.mouseY+"px"
    }).animate({
        left:0,
        top:0,
        opacity: 1,
        width: $(window).width(),
        height: $(window).height()
    },500)


}