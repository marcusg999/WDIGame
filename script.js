              var c=document.getElementById("myCanvas");
              var ctx=c.getContext("2d");
              var img=document.getElementById("Vinyl_Tbg");
              ctx.drawImage(img,10,10);

              var canvas = document.getElementById('myCanvas');
              var context = canvas.getContext('2d');
              var x = 108;
              var y = 369;
              var width = 220;
              var height = 28;
              var imageObj = new Image();
              imageObj.onload = function() {
              context.drawImage(imageObj, x, y, width, height);
              };

              imageObj.src = "images/turntable.jpg";

              var canvas = document.getElementById("myCanvas");
              var ctx = canvas.getContext("2d");
              var x = canvas.width/2;
              var y = canvas.height-30;
              var dx = 2;
              var dy = -2;

              function draw (){
              ctx.beginPath();
              ctx.arc(x, y, 10, 0, Math.PI*2);
              ctx.fillStyle = "white";
              ctx.fill();
              ctx.closePath();
              x += dx;
              y += dy;
            }
              setInterval(draw,10);





