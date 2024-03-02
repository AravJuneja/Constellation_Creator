import csv
from flask import Flask, request, jsonify

app = Flask(__name__)

csv_path = 'data.csv'

@app.route('/append_points', methods=['POST'])
def append_points():
    try:
        data = request.json
        with open(csv_path, mode='a', newline='') as file:
            writer = csv.writer(file)
            # Write all points in a single row
            writer.writerow(data)
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001)
