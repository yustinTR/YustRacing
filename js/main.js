//car
var car = new Car(ctx);

function draw(){ 
car.draw();

}

function myMove() {
      car.flap = true;
}



 window.addEventListener ('keypress', function(e) {
     
   if (e.charCode == 32
      ) {
        
      car.flap = true;
   }
        
})

setInterval(draw,20);
setInterval(Car, 20);