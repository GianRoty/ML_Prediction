import { useState } from "react"

const CarForm = ({existingCar = {}, updateCallback}) => {
    const [car, setCar] = useState("")
    const [model, setModel] = useState("")
    const [volume, setVolume] = useState("")
    const [weight, setWeight] = useState("")
    const [co2, setCo2] = useState("")

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
            headers: {"Content-Type": "application/json"},
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
                    value = {setCar}
                    onChange = {(e) => setCar(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "model">Model: </label>
                <input
                    type = "text"
                    id = "model"
                    value = {setModel}
                    onChange = {(e) => setModel(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "volume">Volume: </label>
                <input
                    type = "number"
                    id = "volume"
                    value = {setVolume}
                    onChange = {(e) => setVolume(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "weight">Weight: </label>
                <input
                    type = "number"
                    id = "weight"
                    value = {setWeight}
                    onChange = {(e) => setWeight(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <label htmlFor = "co2">CO2: </label>
                <input
                    type = "number"
                    id = "co2"
                    value = {setCo2}
                    onChange = {(e) => setCo2(e.target.value)}
                />
            </div>
            <br/>
        </form>
    )
}

export default CarForm