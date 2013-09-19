//https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/DrawingLinesandShapes/DrawingLinesandShapes.html#//apple_ref/doc/uid/TP40010542-CH3-SW1
		
		var can = document.getElementById("can"),  //gets the canvas from the html page
			ctx = can.getContext("2d"); // gets context from the canvas

        function draw() {
		
			ctx.shadowOffsetX = 2;
			ctx.shadowColor = "black";
			ctx.shadowOffsetY = 2;
			ctx.shadowBlur=10;
			
			ctx.strokeStyle = "black";
			ctx.lineJoin = "square";
			ctx.lineCap = "square";
			ctx.lineWidth = 1;
			
			// lines
			ctx.beginPath();
			ctx.moveTo(100, 0); //x, y
			ctx.lineTo(100, can.height-40);						
			ctx.lineTo(can.width, can.height-40);
			
			for ( var i = 40; i < 450; i += 40 ) {
				ctx.moveTo(100, i); //x, y
				ctx.lineTo(can.width, i);
			}
			ctx.stroke();
			
					
			
			
			ctx.fillStyle = "blue";
			ctx.font = "16pt Helvetica";
			ctx.fillText("1975", 125, can.height-10);
			
			//ctx.fillStyle = "blue";
			//ctx.fillRect(150, 100, 50, can.height-140);  // x, y, width, height
			
			
			ctx.fillStyle = "red";
			ctx.font = "16pt Helvetica";
			ctx.fillText("1985", 200, can.height-10);
			
			//ctx.fillStyle = "red";
			//ctx.fillRect(250, 250, 50, can.height-290);  // x, y, width, height
			
			ctx.fillStyle = "green";
			ctx.font = "16pt Helvetica";
			ctx.fillText("1995", 275, can.height-10);
			/*
			ctx.fillStyle = "green";
			ctx.fillRect(350, 150, 50, can.height-190);  // x, y, width, height
			*/
			ctx.fillStyle = "yellow";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2005", 350, can.height-10);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("2015", 425, can.height-10);
			
			
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("100", 10, 40);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("90", 10, 80);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("80", 10, 120);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("70", 10, 160);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("60", 10, 200);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("50", 10, 240);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("40", 10, 280);
			
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("30", 10, 320);
						
			ctx.fillStyle = "black";
			ctx.font = "16pt Helvetica";
			ctx.fillText("20", 10, 360);
			
			ctx.fillStyle = "black";
			ctx.font = "24pt Helvetica";
			ctx.fillText("Population", 250, 30);
			
			
			
			
        }
		
		function drawLines() {
		
			ctx.strokeStyle = "orange";
			ctx.lineJoin = "square";
			ctx.lineCap = "round";
			ctx.lineWidth = 5;
			
			ctx.beginPath();

			ctx.moveTo(150, 250);
			ctx.lineTo(225, 200);
			ctx.lineTo(300, 100);
			ctx.lineTo(375, 75);
			ctx.lineTo(450, can.height-40);
			
			ctx.stroke();
		
		}
		
		
		var bluey = 300,
			blueheight = can.height-340,
			redy = 300,
			redheight = can.height-340,
			greeny = 300,
			greenheight = can.height-340,
			yellowy = 300,
			yellowheight = can.height-340,
			interval = setInterval(drawStepsBlue, 100);
			var intervalRed;
			var intervalGreen;
			var intervalYellow;
		
		function drawStepsYellow() {
			if (  yellowy <= 70 ) {
				clearInterval(intervalYellow);
				drawLines(); //callback, animations are done;
			} else {
				ctx.clearRect(0, 0, can.width, can.height);
				draw();
				ctx.fillStyle = "red";
				ctx.fillRect(200, redy, 50, redheight);
				ctx.fillStyle = "blue";
				ctx.fillRect(125, bluey, 50, blueheight);
				ctx.fillStyle = "green";
				ctx.fillRect(275, greeny, 50, greenheight);
		
				if ( yellowy > 70 ) {
					ctx.fillStyle = "yellow";
					ctx.fillRect(350, yellowy, 50, yellowheight);  // x, y, width, height
					yellowy -= 10;
					yellowheight += 10;
				} else {
					ctx.fillStyle = "yellow";
					ctx.fillRect(350, yellowy, 50, yellowheight); 
				}
			}
		
		}
		
		
		
		function drawStepsGreen(){
			if (  greeny <= 100 ) {
				clearInterval(intervalGreen);
				intervalYellow = setInterval(drawStepsYellow, 100);
			} else {
				ctx.clearRect(0, 0, can.width, can.height);
				draw();
				ctx.fillStyle = "red";
				ctx.fillRect(200, redy, 50, redheight);
				ctx.fillStyle = "blue";
				ctx.fillRect(125, bluey, 50, blueheight);
		
				if ( greeny > 100 ) {
					ctx.fillStyle = "green";
					ctx.fillRect(275, greeny, 50, greenheight);  // x, y, width, height
					greeny -= 10;
					greenheight += 10;
				} else {
					ctx.fillStyle = "green";
					ctx.fillRect(275, greeny, 50, greenheight); 
				}
			}		
		}
		
		function drawStepsRed(){
			if (  redy <= 200 ) {
				clearInterval(intervalRed);
				intervalGreen = setInterval(drawStepsGreen, 100);
			} else {
				ctx.clearRect(0, 0, can.width, can.height);
				draw();
				ctx.fillStyle = "blue";
				ctx.fillRect(125, bluey, 50, blueheight);
		
				if ( redy > 200 ) {
					ctx.fillStyle = "red";
					ctx.fillRect(200, redy, 50, redheight);  // x, y, width, height
					redy -= 10;
					redheight += 10;
				} else {
					ctx.fillStyle = "red";
					ctx.fillRect(200, redy, 50, redheight); 
				}
			}
		}
		
		function drawStepsBlue() {
			if (  bluey <= 250  ) {
				clearInterval(interval);
				intervalRed = setInterval(drawStepsRed, 100);
			} else {
				ctx.clearRect(0, 0, can.width, can.height);
				draw();
				
				if ( bluey > 250 ) {

					ctx.fillStyle = "blue";
					ctx.fillRect(125, bluey, 50, blueheight);  // x, y, width, height
					bluey -= 10;
					blueheight += 10;
				} else {
					ctx.fillStyle = "blue";
					ctx.fillRect(125, bluey, 50, blueheight);
				}
			}
		}
		
		
