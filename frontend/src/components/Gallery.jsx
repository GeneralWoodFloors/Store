import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/gallery/") // Full API URL
      .then((res) => {
        console.log("API Response:", res.data); // Log response
        setImages(res.data); // Assign the array of images
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setError("Failed to load images");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Gallery...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="gallery">
      {images.map((image) => (
        <Link to={`/gallery/${image.id}`}>
          <button className="gallery-button">
            <div key={image.id} className="gallery-item">
              <img
                src={image.image} 
                alt={image.title}
                className="gallery-image"
              />
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
