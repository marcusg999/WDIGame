var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//////////////////
var ballRadius = 8;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
//2nd paddle

var paddleHeight = 10;
var paddleWidth = 75;
var paddleY = (canvas.width-paddleWidth)/2;

///2nd Ball

//////////
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 1;
var brickColumnCount = 1;
var brickWidth = 75;
var brickHeight = 10;
var brickPadding = 10;
var brickOffSetTop = 100;
var brickOffSetLeft = 29;
var score = 0;
var lives =3



// // };


var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for (r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };

    }

}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
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
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
////////// constructor functions

// function Paddle() {
//     this.ctx.beginPath();
//     this.ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//     this.ctx.fillStyle = "green";
//     this.ctx.fill();
//     this.ctx.closePath();
//     }
// function Ball2() {
//     this.ctx.beginPath();
//     this.ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     this.ctx.fillStyle = "black";
//     this.ctx.fill();
//     this.ctx.closePath();
// }
// Ball();

////////
//second paddle

function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(paddleY, 300, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
///////////
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
          ctx.rect(brickX,brickY,brickWidth, brickHeight);
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
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("CONGRATULATIONS Black & Red on working together to Bring Harmony to the Universe! Your WINNERS!");
                        document.location.reload();
                    }
                }
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

              //////////collision dynamic above
          }

        }
         else {
       alert ("Nice Try Player 1")
                switchTurn();
         }
    }

    if(rightPressed && paddleY < canvas.width-paddleWidth) {
        paddleY += 7;
    }
    else if(leftPressed && paddleY > 0) {
        paddleY -= 7;
    }

    x += dx;
    y += dy;requestAnimationFrame(draw);
}

draw();

function switchTurn() {
        document.location.reload();
          alert ("player 2 your up!")
        }







/////////////////////////////////
