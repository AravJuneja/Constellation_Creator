
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

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
                ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function main() {
            const numPoints = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
            const points = generatePoints(numPoints);
            drawPoints(points);
        }

        main();
