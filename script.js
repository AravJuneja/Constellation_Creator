const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        let points = [];

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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            for (const point of points) {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2); 
                ctx.fill();
            }
        }

        function drawLine(startX, startY, endX, endY) {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = 'white';
            ctx.stroke();
        }

        canvas.addEventListener('mousedown', function(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            points.push({x: mouseX, y: mouseY});
            p1x = points[0].x
            if (points.length === 2) {
                drawLine(points[0].x, points[0].y, points[1].x, points[1].y);
                points = [];
            }
        });

        function main() {
            const numPoints = Math.floor(Math.random() * (15)) + 5;
            const points = generatePoints(numPoints);
            drawPoints(points);
            printToConsole(points);
        }

        main();