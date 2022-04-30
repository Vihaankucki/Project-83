var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchdown", my_touchdown);
    
    function my_touchdown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    }

    canvas.addEventListener("youchup", my_touchup);
    function my_touchup(e)
    {
       
    }

    canvas.addEventListener("touchleave", my_touchleave);
    function my_touchleave(e)
    {
       
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touches_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touches_y = e.touches[0].clientY - canvas.offsetTop;

         
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of touches and touches coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touches_x + "y = " + current_position_of_touches_y);
        ctx.lineTo(current_position_of_touches_x, current_position_of_touches_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touches_x; 
        last_position_of_y = current_position_of_touches_y;
    }
     var width=screen.width;
     var height=screen.height;
var newwidth=width-70;
 var newheight=height-80;
 if(width<992){
     document.getElementById("myCanvas").width=newwidth;
     document.getElementById("myCanvas").height=newheight;
     document.body.style.overflow="hidden";

 }
 function clearcanvas(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
 
 