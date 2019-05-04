function Navigate(type){

    if(type[0] == "L"){
        type = type.slice(1);  
    }else{
        setTimeout(()=>{ShowNav()},1000);
    }

    document.querySelector("."+type).scrollIntoView({ 
        behavior: 'smooth' 
    });

    
    

}