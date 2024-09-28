class Car:
    def __init__(self, car, model, volume, weight, co2):
        self.car = car
        self.model = model
        self.volume = volume
        self.weight = weight
        self.co2 = co2

    def to_json(self):
        return "{\"car\": \"" + self.car + "\", \"model\": \"" + self.model + "\", \"volume\": " + self.volume + ", \"weight\": " + self.weight + ", \"co2\": " + self.co2 + "}"