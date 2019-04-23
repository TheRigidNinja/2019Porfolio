
function ShowNav(e){
    
    var perimetersToggle = {
        Close:[180,"menu","none","0px",0,0,1],
        Open:[90,"cancel","block","100%",1,10,1.1],
        CurrentState: []
    }

    // Intructions to toggole between the open and close states
    // Don't mess with above array
    if($("#menu").attr('src').includes("menu")){
        perimetersToggle.CurrentState = perimetersToggle.Open
    }else{
        perimetersToggle.CurrentState = perimetersToggle.Close
    }


    $("#menu").css("transform","rotateZ("+perimetersToggle.CurrentState[0]+"deg)").attr("src","../public/IMG/"+perimetersToggle.CurrentState[1]+".svg")

    $("nav").css({
        "display":perimetersToggle.CurrentState[2],
        "height":perimetersToggle.CurrentState[3],
        "opacity":perimetersToggle.CurrentState[4]
    })

    $(".bodyContent").css({
        "filter": "blur("+perimetersToggle.CurrentState[5]+"px)",
        "transform": "scale("+perimetersToggle.CurrentState[6]+")"
    })    
}