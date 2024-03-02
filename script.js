//const numPoints = Math.floor(Math.random() * (15)) + 5;
//const points = generatePoints(numPoints);
//drawPoints(points);

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
            if (points.length === 2) {
                drawLine(points[0].x, points[0].y, points[1].x, points[1].y);
                points = [];
            }
        });

        function populateDropdown(options) {
            const dropdown = document.getElementById('dropdown');
            dropdown.innerHTML = ''; // Clear existing options
            for (let i = 0; i < options.length; i++) {
                const option = document.createElement('option');
                option.value = i + 1;
                option.text = i + 1;
                dropdown.appendChild(option);
            }
        }

        function grabRowFromCSV(index) {
            fetch('const_data.csv')
                .then(response => response.text())
                .then(data => {
                    const rows = data.trim().split('\n');
                    if (index >= 1 && index <= rows.length) {
                        const row = rows[index - 1];
                        const columns = row.split(',');
                        const columnList = columns.map(column => column.trim());
                        //console.log(columnList);
                    } else {
                        console.error('Invalid index');
                    }
                })
                .catch(error => console.error('Error fetching CSV:', error));
        }

        function handleConfirm() {
            const list = grabRowFromCSV(dropdown.value);
            console.log(list)
        }

        function convertToTuples(list) {
            const tupleList = [];
        
            for (const item of list) {
                const [x, y] = item.split(',').map(coord => parseFloat(coord.trim()));
                tupleList.push([x, y]);
            }
        
            return tupleList;
        }

        function drawPointsOnCanvas(tupleList) {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');

            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a point for each tuple
            tupleList.forEach(tuple => {
                const [x, y] = tuple;
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'blue'; // Set the point color
                ctx.fill();
                ctx.stroke();
            });
        }

        function main() {
            fetch('const_data.csv')
                .then(response => response.text())
                .then(data => {
                    // Split CSV data by lines to count rows
                    const rows = data.trim().split('\n');
                    const numOptions = rows.length;
                    populateDropdown(new Array(numOptions).fill());
                })
                .catch(error => console.error('Error fetching CSV:', error));

            const dropdown = document.getElementById('dropdown');

            

            document.getElementById('confirm').addEventListener('click', handleConfirm);
            
            
       
         }

        main();