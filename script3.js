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
var brickRowCount = 9;
var brickColumnCount = 6;
var brickWidth = 75;
var brickHeight = 10;
var brickPadding = 10;
var brickOffSetTop = 80;
var brickOffSetLeft = 20;
var score = 0;
var lives = 3;

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

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "black";
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
    ctx.fillStyle = "red";
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

          function drawBall() {
              ctx.beginPath();
              ctx.arc(x, y, ballRadius, 0, Math.PI*2);
              ctx.fillStyle = "black";
              ctx.fill();
              ctx.closePath();
          }
          function drawPaddle() {
              ctx.beginPath();
              ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
              ctx.fillStyle = "black";
              ctx.fill();
              ctx.closePath();
          }
          function drawBricks() {
              for(c=0; c<brickColumnCount; c++) {
                  for(r=0; r<brickRowCount; r++) {
                      if(bricks[c][r].status == 1) {
                          var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                          var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                          bricks[c][r].x = brickX;
                          bricks[c][r].y = brickY;
                          ctx.beginPath();
                          ctx.rect(brickX, brickY, brickWidth, brickHeight);
                          ctx.fillStyle = "red";
                          ctx.fill();
                          ctx.closePath();
                      }
                  }
              }
          }
          function drawScore() {
              ctx.font = "16px Arial";
              ctx.fillStyle = "#0095DD";
              ctx.fillText("Score: "+score, 8, 20);
          }
          function drawLives() {
              ctx.font = "16px Arial";
              ctx.fillStyle = "#0095DD";
              ctx.fillText("Lives: "+lives, canvas.width-65, 20);
          }

          function draw() {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              drawBricks();
              drawBall();
              drawPaddle();
              drawScore();
              drawLives();
              collisionDetection();

              if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
                  dx = -dx;
              }
              if(y + dy < ballRadius) {
                  dy = -dy;
              }
              else if(y + dy > canvas.height-ballRadius) {
                  if(x > paddleX && x < paddleX + paddleWidth) {
                      dy = -dy;
                  }
                  else {
                      lives--;
                      if(!lives) {
                          alert("Player 2!");
                          document.location.reload();
                      }
                      else {
                          x = canvas.width/2;
                          y = canvas.height-30;
                          dx = 3;
                          dy = -3;
                          paddleX = (canvas.width-paddleWidth)/2;
                      }
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
              requestAnimationFrame(draw);
          }

          draw();

