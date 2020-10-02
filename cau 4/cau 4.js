
// class Circle

function Circle(x,y,radius,color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.render = function (ctx){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
            ctx.fill();
            ctx.closePath();
        }
}

//Object

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let circle1 = new Circle(10,10,100,"#000000");
circle1.render(ctx);

