import os
import sys
import json

from flask import Flask, Response, request, jsonify
from models import Car
from flask_cors import CORS

sys.path.append(os.path.join(os.path.dirname(__file__), 'utilities'))
import linear_regression
import training_set

app = Flask(__name__)
CORS(app)

volumes = []
weights = []
co2es = []

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

    if car:
        f = open("./database/" + car + ".json", "w")
        new_car = Car(car, model, volume, weight, co2)
        f.write(new_car.to_json())
        f.close()
        return jsonify({"message": "OK"}), 200
    else:
        return jsonify({'Error': 'Nessun campo deve essere vuoto'}), 404

@app.route('/linear_regression_cars', methods=['GET'])
def linear_regression_cars():
    directory = './database'

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

    image = linear_regression.linear_regression(volumes, weights)
    return Response(image, mimetype='image/png')

@app.route('/training_set_car', methods=['GET'])
def training_set_cars():
    directory = './database'

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

    image = training_set.training_setting(volumes, weights)
    return Response(image, mimetype='image/png')