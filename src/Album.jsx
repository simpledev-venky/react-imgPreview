import React, { useState } from 'react';

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    const imagesArray = [];

    for (let i = 0; i < selectedImages.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          imagesArray.push(reader.result);
          if (imagesArray.length === selectedImages.length) {
            setImages(imagesArray);
          }
        }
      };

      reader.readAsDataURL(selectedImages[i]);
    }
  };

  return (
    <div>
     <header>Images Album</header>
      <input type="file" onChange={handleImageChange} multiple />
      
      <div className="img-div">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`uploaded image ${index}`} />
      ))}
      </div>

    </div>
  );
}

export default ImageUploader;