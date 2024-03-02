import csv
import random

constellation_data = ['constellation', *range(1,16)]

csv_path = 'data.csv'

with open(csv_path, mode='w', newline='') as file:
    writer = csv.writer(file)
    #writer.writerows(constellation_data)

print(constellation_data)