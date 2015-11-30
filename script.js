              var c=document.getElementById("myCanvas");
              var ctx=c.getContext("2d");
              var img=document.getElementById("Vinyl_Tbg");
              ctx.drawImage(img,10,10);

              var canvas = document.getElementById('myCanvas');
              var context = canvas.getContext('2d');
              var x = 108;
              var y = 370;
              var width = 220;
              var height = 28;
              var imageObj = new Image();
              imageObj.onload = function() {
                context.drawImage(imageObj, x, y, width, height);
              };
              imageObj.src = "images/turntable.jpg";

