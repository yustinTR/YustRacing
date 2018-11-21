var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//road
ctx.fillStyle = "#333333";
ctx.fillRect(0, 200, 700, 200);

//outsite stripes
ctx.fillStyle = "#fff";
ctx.fillRect(0, 200, 700, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(0, 345, 700, 5);

//mid stripes
ctx.fillStyle = "#fff";
ctx.fillRect(0, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(100, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(200, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(300, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(400, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(500, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(600, 265, 70, 5);

ctx.fillStyle = "#fff";
ctx.fillRect(700, 265, 70, 5);


//car
var car = new Car(ctx);
var x = 0;

//zorgt er voor dat de car getekend word
car.draw();
