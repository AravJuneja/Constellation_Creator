const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        let startPoint = { x: 0, y: 0 };
        let endPoint = { x: 0, y: 0 };
        let drawing = false;
        let points = [];
        let lines = [];

        function generatePoints(numPoints) {
            const points = [];
            const screenMarginX = canvas.width / 4;
            const screenMarginY = canvas.height / 4;
            for (let i = 0; i < numPoints; i++) { 
                const x = Math.random() * (canvas.width - 2 * screenMarginX) + screenMarginX;
                const y = Math.random() * (canvas.height - 2 * screenMarginY) + screenMarginY;

                points.push({ x, y });
            }
            return points;
        }

        function drawPoints(points) {
            for (const point of points) {
                const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 7); // Adjust the last parameter to control the size of the gradient
                gradient.addColorStop(0, 'white'); // Transparent at center
                gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)'); // Semi-transparent white
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent at edges

                ctx.beginPath();
                ctx.arc(point.x, point.y, 10, 0, Math.PI * 2); // Increase the radius of the circle to encompass the gradient
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        function drawLines(lines) {
            for (const line of lines) {
                const { startX, startY, endX, endY } = line;
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop("0", "black");
                gradient.addColorStop("0.2", "yellow");
                gradient.addColorStop("0.8", "yellow");
                gradient.addColorStop("1", "black");

                ctx.strokeStyle = gradient;
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        canvas.addEventListener('mousedown', function(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            if (!drawing) {
                startPoint = { x: mouseX, y: mouseY };
                endPoint = { x: mouseX, y: mouseY };
                drawing = true;
            } else {
                lines.push({ startX: startPoint.x, startY: startPoint.y, endX: endPoint.x, endY: endPoint.y });
                drawing = false;
            }
        });

        canvas.addEventListener('mousemove', function(event) {
            if (drawing) {
                const rect = canvas.getBoundingClientRect();
                endPoint.x = event.clientX - rect.left;
                endPoint.y = event.clientY - rect.top;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawPoints(points);
                drawLines(lines);
                drawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
            }
        });

        function drawLine(startX, startY, endX, endY) {
            ctx.beginPath();
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop("0", "black");
            gradient.addColorStop("0.2", "yellow");
            gradient.addColorStop("0.8", "yellow");
            gradient.addColorStop("1", "black");

            ctx.strokeStyle = gradient;
            
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        function main() {
            const numPoints = Math.floor(Math.random() * (7)) + 5;
            points = generatePoints(numPoints);
            drawPoints(points);
            document.getElementById("Submit").addEventListener("click", function(){
                location.reload();
              });


        }

        main();