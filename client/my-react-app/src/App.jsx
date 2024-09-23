import { useEffect, useState } from 'react'
import CarList from './CarsList'
import './App.css'
import CarForm from './CarFrom';

function App() {
  const [cars, setCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setcurrentCar] = useState([]);

  useEffect(() => {fetchCars()}, []);

  const fetchCars = async () => {
    const response = await fetch("http://127.0.0.1:5000/cars");
    const data = await response.json();
    setCars(data.cars);
    console.log(data.cars);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openCreateModal = () => {
    if (!isModalOpen) 
      setIsModalOpen(true)
  }

  const openEditModal = (car) => {
    if (isModalOpen) return
    setcurrentCar(car)
    setIsModalOpen(true)
  }

  return (
    <>
      <h1>Machine Learning Prediction</h1>
      <ul>
        <li><button onClick={openCreateModal}>Create new car</button></li>
        <li><button onClick={openCreateModal}>View the linear regression</button></li>
        <li><button onClick={openCreateModal}>Display the Training Set</button></li>
        <li><button onClick={openCreateModal}>Predict</button></li>
        <li><button onClick={openCreateModal}>Show Confusion Matrix</button></li>
      </ul>
      {isModalOpen && 
        <div className = "modal">
          <div className = "modal-content">
            <span className = "close" onClick = {closeModal}>&times;</span>
            <CarForm/>
          </div>
        </div>
      }
    </>
  );
}

export default App