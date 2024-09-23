import React from "react"

const CarList = ({cars}) => {
    return <div>
        <h1>Cars</h1>
        <table>
            <thead>
                <tr>
                    <th>Car</th>
                    <th>Model</th>
                    <th>Volume</th>
                    <th>Weight</th>
                    <th>CO2</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((singlecar) => (
                    <tr key = {singlecar.id}>
                        <td>{singlecar.car}</td>
                        <td>{singlecar.model}</td>
                        <td>{singlecar.volume}</td>
                        <td>{singlecar.weight}</td>
                        <td>{singlecar.co2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default CarList