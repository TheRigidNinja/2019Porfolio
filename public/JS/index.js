
// function LoadBackground(){
//     const canvas = document.getElementsByTagName("CANVAS")[0],
//     ctx = canvas.getContext('2d');
//     var animate = 0,
//     animationTime = Math.random()*300+100;

//     canvas.width  = window.innerWidth;
//     canvas.height = window.innerHeight;

//     var gridValue = {
//         ctx: ctx,
//         Xcenter: 100,
//         Ycenter: 100,
//         num: .2
//     };

//     var animateColor = () =>{
//         animate++;
//         window.requestAnimationFrame(animateColor);
//         //  console.log(animate, animationTime);
//         if(animate  > animationTime){
//             animate = 0
//             animationTime = Math.random()*300+100;
//             ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//             for (let n = 0; n < Math.round(window.innerWidth/50); n++) {
//                 let z = n%2 != 0?86.5:0
//                 for (let i = 0; i < Math.round(window.innerHeight/150); i++) {
//                     gridValue.Xcenter =  (n*150)
//                     gridValue.Ycenter =  (i*173.2)+z
//                     // gridValue.num =
//                     Hexagon(gridValue)
//                 }
//             }

//         }
//     }

//     window.requestAnimationFrame(animateColor)


//     // Hexagon(gridValue)
// }

// // Makes A hexigon
// function Hexagon({ctx,Xcenter,Ycenter,num}){
//     ctx.beginPath();
//     ctx.moveTo (Xcenter +  100 * Math.cos(0), Ycenter +  100 *  Math.sin(0));          
    
//     for (var i = 1; i <= 6;i += 1) {
//         ctx.lineTo (Xcenter + 100 * Math.cos(i * 2 * Math.PI / 6), Ycenter + 100 * Math.sin(i * 2 * Math.PI / 6));
//     }

//     ctx.fillStyle = `rgba(255,255,255,${Math.random()-.7})`;
//     ctx.lineWidth = 1;
//     ctx.fill();
// }

window.onresize = function(){}
// window.onload = function(){LoadBackground();}
