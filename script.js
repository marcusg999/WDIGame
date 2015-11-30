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

              function draw() {
              ctx.beginPath();
              ctx.arc(x, y, 8, 0, Math.PI*2);
              ctx.fillStyle = "white";
              ctx.fill();
              ctx.closePath();
              x += dx;
              y += dy;

              }

              setInterval (draw,10);


              ctx.beginPath();
              ctx.paddle(160, 10, 100, 40);
              ctx.stroke();
              ctx.closePath();





