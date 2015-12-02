var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
////////////

//////////////////
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


//2nd paddle
var paddleY = (canvas.width-paddleWidth)/2;
var paddleHeight = 10;
var paddleWidth = 75;

//
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 8;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffSetTop = 205;
var brickOffSetLeft = 30;
//var switchTurn = reload;


//rotating the bricks
// var i = 0;
// var image = new Image();
// image.src = "Gold_Vinyl.jpg"

// function loop() {
//   setTimeout (function() {
//     1++;
//     c.clearRect(0, 0, 500, 500);

//     drawImageRot(image, 250, 250, 120, 120, i);
//     loop();
//   }1000/fps)
// }

// function drawImageRot(img,x,y,width,height,deg){

//     //Convert degrees to radian
//     var rad = deg * Math.PI / 180;

//     //Set the origin to the center of the image
//     ctx.translate(x + width / 2, y + height / 2);

//     //Rotate the canvas around the origin
//     ctx.rotate(rad);

//     //draw the image
//     ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

//     //reset the canvas
//     ctx.rotate(rad * ( -1 ) );
//     ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));}

///////

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for (r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };

    }

}
/////////





document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
    function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

//second paddle

function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(paddleY, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
/////
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
  for(c=0; c<brickColumnCount; c++) {
      for(r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {
          var brickX = (c*(brickWidth+brickPadding)) + brickOffSetLeft;
          var brickY = (r*(brickHeight+brickPadding))+ brickOffSetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX,brickY, brickWidth, brickHeight);
          ctx.fillStyle = "red";
          ctx.fill();
          ctx.closePath();
         }
      }
  }
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawPaddle2();
    drawBricks();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy  < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
                          if(y=y-paddleHeight) {
              dy = -dy;
          }

        }
         else {
       alert ("PlayerTwo!");
       document.location.reload();

         }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}


//finish switchTurn Function
  // function switchTurn() {
  //       document.location.reload(),

  //       }


setInterval(draw, 10);
