import {useEffect, useState} from 'react'
import './App.css'
import CarForm from './CarForm';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen_reglin, setIsModalOpen_reglin] = useState(false);
  const [currentCar, setcurrentCar] = useState([]);


  const closeModal = () => {
    setIsModalOpen(false)
    setIsModalOpen_reglin(false)
    setcurrentCar({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) 
      setIsModalOpen(true)
  }

  const onUpdate = (car) => {
    closeModal()
  }

  const viewLinearRegression = async () => {
    const url = "http://127.0.0.1:5000/linear_regression_cars"
    
    const options = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }
  
    const response = await fetch(url, options);
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImageSrc(imageObjectURL);
    
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      console.log(data)
    }

    console.log(response)
    setIsModalOpen_reglin(true)
  }

  return (
    <>
      <h1>Machine Learning Prediction</h1>
      <p>This application simulates a machine learning approach with data in input.</p>
      <p>Machine Learning is making the computer learn from studying data and statistics.</p>
      <p>Machine Learning is a step into the direction of artificial intelligence (AI).</p>
      <p>Machine Learning is a program that analyses data and learns to predict the outcome.</p>
      <ul>
        <li><button onClick = {openCreateModal}>Create new car</button></li>
        <li><button onClick = {viewLinearRegression}>View the linear regression</button></li>
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
      {isModalOpen_reglin && 
        <div className = "modal">
          <div className = "modal-content">
            <span className = "close" onClick = {closeModal}>&times;</span><br/>
            {imageSrc ? <img src={imageSrc} alt="Grafico" /> : <p>Caricamento del grafico...</p>}
          </div>
        </div>
      }
    </>
  );
}

export default App