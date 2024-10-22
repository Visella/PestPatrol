import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import './global.css';

const Detect: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setPrediction(response.data.predicted_class);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div className="page">
      <h1 className="page-title">Upload an Image for Prediction</h1>
      <div className="page-content">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Predict</button>
        </form>
        {prediction && <h2>Prediction: {prediction}</h2>}
      </div>
    </div>
  );
};

export default Detect;
