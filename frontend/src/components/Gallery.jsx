import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import axios from "axios";



function Gallery () {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect (() => {
    axios
    .get('gallery/') 
    .then((res) => {
      setImages(res.data)
      setLoading(false)
    })
    .catch((error) => {
      console.error(error);
      setError("Failed to load images")
      setLoading(false)
    });
  }, [])

  if (loading) return <p>Loading Gallery...</p>
  if (error) return <p>{error}</p>

  return ( 
    <div className="Gallery">
      {images.map((image) => { // link wil link to a singleImage page; need to create
        <Link> 
          <img src={image.image} alt={image.title} className="image-gallery" />
          <h3>{image.title}</h3>
        </Link>
      })}
    </div>
  )
}

export default Gallery
