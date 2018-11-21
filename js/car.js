function Car(ctx) {


    this.x = 20;

    this.y = 250;

    this.flap = false;





    this.draw = function () {

        ctx.fillStyle = "red";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x, this.y, 20, 20);
        ctx.strokeRect(this.x, this.y, 20, 20);
        this.move();
    }


    this.move = function () {

        if (this.flap == true) {
            this.y = 6;
            this.flap = false;

        }
    }
    

}
    function myMove() {
      car.flap = true;
}

setInterval(Car.draw,20);
setInterval(Car, 20);