var toggleType = "Menu"

// Instraction to toggle between the open and close states of menu bar
// Don't mess/change anything in the array - goodluck spending time to figuring whats wrong
var perimetersToggle = {
    Close:[180,"menu","none","0px",0,0,1],
    Open:[90,"cancel","block","100%",1,10,1.1],
    DetailsSm:[0,"100%","50%","-50%",0,"100%","70%","100%",4,0,0,"50%"],
    DetailsLg:["-50%","50%","100%",0,"100%","50%","100%",0,0,4,"50%",0],
    DetailsSmRm: [0,"-50%",0,"100%"],
    DetailsLgRm: ["-50%",0,"100%",0],
    CurrentState: [],
}

function ShowProject(projectType){
    toggleType = projectType;

    if ($(window).width() <= 980){ 
        perimetersToggle.CurrentState = perimetersToggle.DetailsSm
    }else{
        perimetersToggle.CurrentState = perimetersToggle.DetailsLg
    }

    // Toggle projects details
    $(`.MoreInfo, .${projectType}`).css("display","block");
    $(".bodyContent").css("filter","blur(5px)");
    $("#menu").css({
        transform: "scale(1.5)translate(-30px, 20px)rotateZ(90deg)",
    }).attr("src","../public/IMG/cancel.svg");

    $(`.${projectType}`).find(".ImgSection").css({
        left:perimetersToggle.CurrentState[0],width:perimetersToggle.CurrentState[1],height:perimetersToggle.CurrentState[2],top:perimetersToggle.CurrentState[3]
    }).animate({left: 0,top: 0,opacity: 1},250);

    $(`.${projectType}`).find(".ContentSection").css({
        left:perimetersToggle.CurrentState[4],width:perimetersToggle.CurrentState[5],height:perimetersToggle.CurrentState[6],top:perimetersToggle.CurrentState[7],
        "border-top":perimetersToggle.CurrentState[8]+"px solid rgba(0,0,0,0.5)",
        "border-left":perimetersToggle.CurrentState[9]+"px solid rgba(0,0,0,0.5)"
    }).animate({left:perimetersToggle.CurrentState[10],top:perimetersToggle.CurrentState[11],opacity: 1},250);
}


function ShowNav(){
    // toggles menu bar
    if (toggleType == "Menu"){ 
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

    }else{

        // project details back to default 
        projectType = toggleType;
        toggleType = "Menu";

        if ($(window).width() <= 980){ 
            perimetersToggle.CurrentState = perimetersToggle.DetailsSmRm
        }else{
            perimetersToggle.CurrentState = perimetersToggle.DetailsLgRm
        }

        $(".bodyContent").css("filter","blur(0px)");
        $("#menu").css({
            transform: "scale(1)translate(0px, 0px)rotateZ(0deg)",
        }).attr("src","../public/IMG/menu.svg");

        $(`.${projectType}`).find(".ImgSection").animate({left: perimetersToggle.CurrentState[0],top: perimetersToggle.CurrentState[1],opacity: 0},250);
        
        $(`.${projectType}`).find(".ContentSection").animate({left:perimetersToggle.CurrentState[2],top:perimetersToggle.CurrentState[3],opacity: 0},250,()=>{
             $(`.MoreInfo, .${projectType}`).css("display","none");
        });
    }
}


// Show Email and Phone Number 
function ShowEmailPhone(){
    prompt("Quickest way to get in touch","📞:   brian.shisanya2000@gmail.com         ☎:   0416047871")
}


