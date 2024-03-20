




function start(){

  let div = document.getElementById('startbutton');
  div.remove();

 bottle();
 leaf();
 rod();


  
    
    






  


 
}


function bottle(){
  
  const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

  const bottle = new Image();
  bottle.onload =function() {
    ctx.drawImage(bottle,100, 100, 300, 600);
  };
  bottle.src ="assets/bottle.png";



}


function leaf(){
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  

  const Rleaf  = new Image();
  const Lleaf  = new Image();

  Rleaf.onload =function() {
    ctx.drawImage(Rleaf,235, 448, 10, 100);
    ctx.drawImage(Lleaf,250, 448, 10, 100);

  };

 


  Rleaf.src ="assets/leaf.png";
  Lleaf.src ="assets/leaf.png";
  
}

function rod(){
  const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



  const rodB   = new Image();

  rodB.onload =function() {
    ctx.save();
    ctx.translate(525, 110);
    ctx.rotate(92);
    ctx.drawImage(rodB, -165, 50, 210, 20);
    ctx.restore();
    
  };

  rodB.src ="assets/rodB.png";  

}


function electrons (){





}