var canvas = new fabric.Canvas("Mycanvas")
var playerx = 50
var playery = 50
var blockwidth = 30
var blockheight = 30
var playerobject = ""
var blockobject = ""

function updateplayer(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(120);
        playerobject.scaleToHeight(120);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject)
    })
}

function updateblock(block){
    fabric.Image.fromURL(block,function(img){
        blockobject=img
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject)
    })
}

window.addEventListener("keydown",kd)

function kd(e){
    var x= e.keyCode
    console.log(x)
    if(x==67){
        updateblock("cloud.jpg")
        console.log("c is pressed")
    }
    if(x==68){
        updateblock("dark_green.png")
        console.log("d is pressed")
    }
    if(x==71){
        updateblock("ground.png")
        console.log("g is pressed")  
    }
    if(x==76){
        updateblock("light_green.png")
        console.log("l is pressed")
    }
    if(x==82){
        updateblock("roof.jpg")
        console.log("r is pressed")
    }
    if(x==84){
        updateblock("trunk.jpg")
        console.log("t is pressed")
    }
    if(x==87){
        updateblock("wall.png")
        console.log("w is pressed")
    }
    if(x==89){
        updateblock("yellow_wall.png")
        console.log("y is pressed")
    }
    if(x==37){
        left()
    }
    if(x==38){
        up()
    }
    if(x==39){
        right()
    }
    if(x==40){
        down()
    }
    if(e.shiftKey==true && x==80){
        blockwidth=blockwidth+10
        blockheight=blockheight+10
       document.getElementById("width").innerHTML=blockwidth;
       document.getElementById("height").innerHTML=blockheight; 
    }
    if(e.shiftKey==true && x==77){
        blockwidth=blockwidth-10
        blockheight=blockheight-10
        document.getElementById("width").innerHTML=blockwidth;
        document.getElementById("height").innerHTML=blockheight;
    }
}

function right(){
    if(playerx<700){
        playerx=playerx+blockwidth;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function left(){
    if(playerx>0){
        playerx=playerx-blockwidth;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function down(){
    if(playery<500){
        playery=playery+blockheight;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function up(){
    if(playery>0){
        playery=playery-blockheight;
        canvas.remove(playerobject)
        updateplayer()
    }
}
