              var canvas = document.getElementById('myCanvas');
              var context = canvas.getContext('2d');
              var x = 188;
              var y = 39;
              var width = 250;
              var height = 37;
              var imageObj = new Image();
              imageObj.onload = function() {
              context.drawImage(imageObj, x, y, width, height);
              };
              imageObj.src = "images/turntable.jpg";

              var c=document.getElementById("myCanvas");
              var ctx=c.getContext("2d");
              var img=document.getElementById("Vinyl_Tbg");
              ctx.drawImage(img,10,10);

              var canvas = document.getElementById('myCanvas');
              var ctx = canvas.getContext("2d");
              var x = canvas.width/2;
              var y = canvas.height-30;
              var dx = 2;
              var dy = -2;

              var canvas = document.getElementById("myCanvas");
              var ctx = canvas.getContext("2d");

              var x = canvas.width/2;
              var y = canvas.height-30;
              var dx = 2;
              var dy = -2;

              function drawBall() {
              ctx.beginPath();
              ctx.arc(x, y, ballRadius, 0, Math.PI*2);
              ctx.fillStyle = "purple";
              ctx.fill();
              ctx.closePath();
              }

              function draw() {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              drawBall();

              if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
                  dx = -dx;
              }
              if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
                  dy = -dy;
              }

              x += dx;
              y += dy;
              }

              setInterval(draw, 10);

              setInterval (draw,10);

              var ballRadius = 8;
               if (y + dy < 0) {

               }
               if (y + dy > canvas.height) {
                  dy = -dy;
               }
               if (x + dx > canvas.width || x + dx < 0) {
                  dx = -dx;
               }
               if (y + dy > canvas.height || y + dy < 0) {
                  dy = -dy;

               };










