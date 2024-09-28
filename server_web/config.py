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