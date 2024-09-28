import { useEffect, useState } from 'react'
import './App.css'
import CarForm from './CarForm';

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
    setcurrentCar({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) 
      setIsModalOpen(true)
  }

  const onUpdate = (car) => {
    closeModal()
    fetchCars()
  }

  return (
    <>
      <h1>Machine Learning Prediction</h1>
      <p>This application simulates a machine learning approach with data in input.</p>
      <p>Machine Learning is making the computer learn from studying data and statistics.</p>
      <p>Machine Learning is a step into the direction of artificial intelligence (AI).</p>
      <p>Machine Learning is a program that analyses data and learns to predict the outcome.</p>
      <ul>
        <li><button onClick={openCreateModal}>Create new car</button></li>
        <li><button>View the linear regression</button></li>
        <li><button>Display the Training Set</button></li>
        <li><button>Predict</button></li>
        <li><button>Show Confusion Matrix</button></li>
      </ul>
      {isModalOpen && 
        <div className = "modal">
          <div className = "modal-content">
            <span className = "close" onClick = {closeModal}>&times;</span>
            <CarForm existingCar = {currentCar} updateCallback={onUpdate}/>
          </div>
        </div>
      }
    </>
  );
}

export default App