
// let x = 0;
// let hastighed = 3
let radius = 50
let xValues = [100,150,200];
let yValues = [100,150,100];
let xSpeed = [-1,9,-13];
let ySpeed = [3,7,-4];

function setup() {
  createCanvas(600, 400);

}


function draw() {
  background(220);
  // circle (x,150,radius);
// her sker det at den første if får vores x koordinat
// til at være -3 når vores x større en bredden
// den anden if siger nu hvor x mindre end 0
// så skal vores x være større end vores x værdig
// - radius/2 gør det at den rammer kenten med uderside

  //vandret HUSK AT BYT X OG 150 RUNDT
// if (x > width - radius/2){
// hastighed = -3;
// }
// if (x < 0 + radius/2){
// hastighed = 3;
// }
  

//   x = x + hastighed;   


for(let i = 0; i < xValues.length && i < yValues.length; i++){
 if(xValues[i] > width - radius || xValues[i] < 0 + radius)
 xSpeed[i]=-xSpeed[i]

  if(yValues[i] > height-radius||yValues[i] < 0 + radius){
    ySpeed[i] = -ySpeed[i]}
    
    
xValues[i]+=xSpeed[i]
yValues[i]+=ySpeed[i]

circle(xValues[i],yValues[i],radius);

}
}
  


   
   

