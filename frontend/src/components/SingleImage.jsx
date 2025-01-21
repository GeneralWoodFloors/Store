import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const SingleImage = () => {
  const { id } = useParams(); // Get the image ID from the URL
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/gallery/${id}/`) // Fetch single image data
      .then((response) => {
        setImage(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching image:", err);
        setError("Failed to load image.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading image...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="single-image">
      <img src={image.image} alt={image.title} className="single-image-img" />
      <h1>{image.title}</h1>
      <p>{image.description}</p>

      <Link to="/gallery" className="button-link">
        <button>Back to Gallery</button>
      </Link>
    </div>
  );
};

export default SingleImage;
