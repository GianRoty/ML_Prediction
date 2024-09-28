import { useState } from "react"

const CarForm = ({existingCar = {}, updateCallback}) => {
    const [car, setCar] = useState(existingCar.car || "")
    const [model, setModel] = useState(existingCar.model || "")
    const [volume, setVolume] = useState(existingCar.volume || "")
    const [weight, setWeight] = useState(existingCar.weight || "")
    const [co2, setCo2] = useState(existingCar.co2 || "")

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            car,
            model,
            volume,
            weight,
            co2
        }
        const url = "http://127.0.0.1:5000/create_car"
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(data)
        }
        
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor = "car">Car: </label>
                <input
                    type = "text"
                    id = "car"
                    onChange = {(e) => setCar(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "model">Model: </label>
                <input
                    type = "text"
                    id = "model"
                    onChange = {(e) => setModel(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "volume">Volume: </label>
                <input
                    type = "number"
                    id = "volume"
                    onChange = {(e) => setVolume(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "weight">Weight: </label>
                <input
                    type = "number"
                    id = "weight"
                    onChange = {(e) => setWeight(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "co2">CO2: </label>
                <input
                    type = "number"
                    id = "co2"
                    onChange = {(e) => setCo2(e.target.value)}
                />
            </div>
            <br/>
            <button id = "insertion">Insert new car</button>
        </form>
    )
}

export default CarForm