import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PhotoCard from '../PhotoCard/PhotoCard';

function App() {

  const [imageGallery, setImageGallery] = useState([])

  const getImageGallery = () => {
    axios
      .get("/gallery")
      .then(response => {
        setImageGallery(response.data);
        console.log("response is:", response);
        console.log("response data is:", response.data);
      })
      .catch(err => {
        console.log("Error getting images:", err);
        // alert("Error getting images");
      });
  }; // end getShoppingList

  useEffect(() => {
    getImageGallery();
  }, []);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className='imageGalleryDiv'>
        {imageGallery.map(imageGallery => (
          <PhotoCard
            key={imageGallery.id}
            imageGallery={imageGallery}
          />
        ))}
        </div>
      </div>
    );
}

export default App;
