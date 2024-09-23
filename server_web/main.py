from flask import request, jsonify
from config import app
from models import Car

if __name__ == "__main__":
    app.run(debug=True)

"""@app.route("/cars", methods=["GET"])
def get_cars():
    #cars =
    json_cars = list(map(lambda x: x.to_json(), cars))
    return jsonify({"cars": json_cars})
"""

@app.route("/create_car", methods=["POST"])
def create_car():
    car = request.json.get("car")
    model = request.json.get("model")
    volume = request.json.get("volume")
    weight = request.json.get("weight")
    co2 = request.json.get("co2")

    if not car or model or volume or weight or co2:
        return (jsonify({"message": "You must include a car, a model, a volume, a weight and co2"}), 400)
    
    new_car = Car(car, model, volume, weight, co2)
    print(new_car)