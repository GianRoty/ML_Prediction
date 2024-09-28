import os
import json

from flask import Flask, request, jsonify
from models import Car
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')  # Permette tutte le origini
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return response

@app.route('/create_car', methods=['POST'])
def createcar():
    car = request.json.get("car")
    model = request.json.get("model")
    volume = request.json.get("volume")
    weight = request.json.get("weight")
    co2 = request.json.get("co2")

    f = open("./database/" + car + ".json", "w")

    new_car = Car(car, model, volume, weight, co2)

    f.write(new_car.to_json())
    f.close()

    return jsonify({"message": "OK"})

@app.route('/linear_regression_cars', methods=['GET'])
def linear_regression_cars():
    directory = './database'
    volumes = []
    weights = []
    co2es = []

    for dirpath, dirnames, filenames in os.walk(directory):
        print(f"Directory corrente: {dirpath}")
    for dirname in dirnames:
        print(f"Sottocartella: {dirname}")
    for filename in filenames:
        print(f"File: {filename}")
        file = open(directory + "/" + filename, "r")
        x = file.read()
        data = json.loads(x)
        volumes.append(data["volume"])
        weights.append(data["weight"])
        co2es.append(data["co2"])
    
    print(f"Volumes: {volumes}")
    print(f"Weights: {weights}")
    print(f"CO2: {co2es}")
    
    return jsonify({"message": "OK"})