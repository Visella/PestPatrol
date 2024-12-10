import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import "./global.css";

const Detect: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [view, setView] = useState<"upload" | "error" | "result" | "details">(
    "upload"
  );
  const [predictionDetails, setPredictionDetails] = useState<{
    class: string;
    description: string;
    imageUrl: string;
    symptoms: string[];
    management: string[];
  } | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setView("error");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://api-pest-patrol.vercel.app/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setPredictionDetails({
        class: response.data.predicted_class,
        description: response.data.description,
        imageUrl: URL.createObjectURL(file), // Use the uploaded file's URL
        symptoms: response.data.symptoms,
        management: response.data.management,
      });
      setView("result");
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  if (view == "upload") {
    return (
      <div className="page">
        <div className="content-box">
          <button onClick={() => setView("upload")} className="close-btn">
            X
          </button>
          <h2 className="page-title">Upload an Image for Prediction</h2>
          <div className="page-content">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input"
              />
              <button type="submit" className="predict-btn">
                Predict
              </button>
            </form>
            <div className="images-box">
              <img src="../assets/takut.png" alt="" />
              <img src="../assets/dilarang.png" alt="" />
              <img src="../assets/mati.png" alt="" />
            </div>
          </div>
          {/* Dekorasi Daun */}
          <img src="../assets/leaf.png" alt="Leaf" className="leaf top-left" />
          <img
            src="../assets/leaf.png"
            alt="Leaf"
            className="leaf bottom-right"
          />
        </div>

        <div className="footer">Diagnose. Treat. Grow.</div>
      </div>
    );
  }
  if (view === "error") {
    return (
      <div className="page">
        <div className="content-box">
          <button onClick={() => setView("upload")} className="close-btn">
            X
          </button>
          <h2 className="page-title">You haven't chosen any file!</h2>
          <button className="back-btn-error" onClick={() => setView("upload")}>
            Back
          </button>
          <div className="images-box">
            <img src="../assets/takut.png" alt="" />
            <img src="../assets/dilarang.png" alt="" />
            <img src="../assets/mati.png" alt="" />
          </div>
          <img src="../assets/leaf.png" alt="Leaf" className="leaf top-left" />
          <img
            src="../assets/leaf.png"
            alt="Leaf"
            className="leaf bottom-right"
          />
        </div>
        <div className="footer">Diagnose. Treat. Grow.</div>
      </div>
    );
  }

  if (view === "result") {
    return (
      <div className="result-page">
        <div className="result-border">
          <button onClick={() => setView("upload")} className="back-btn">
            X
          </button>
          <div className="result-content">
            <img
              src={predictionDetails?.imageUrl}
              alt={predictionDetails?.class}
              className="result-image"
            />
            <h1 className="result-title">
              Prediction: {predictionDetails?.class}
            </h1>
            <button
              className="see-details-btn simple-btn"
              onClick={() => setView("details")}
            >
              See Details
            </button>
          </div>
          {/* Dekorasi Daun */}
          <img src="../assets/leaf.png" alt="Leaf" className="leaf top-left" />
          <img
            src="../assets/leaf.png"
            alt="Leaf"
            className="leaf bottom-right"
          />
        </div>

        <div className="footer">Diagnose. Treat. Grow.</div>
      </div>
    );
  }
  if (view === "details") {
    return (
      <div className="details-page">
        <button onClick={() => setView("result")} className="detail-back-btn">
          &lt;
        </button>
        <div className="details-layout">
          <div className="details-text-container">
            <h1 className="details-title">{predictionDetails?.class}</h1>
            <p>{predictionDetails?.description}</p>
            <h2>Symptoms</h2>
            <ul>
              {predictionDetails?.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
            <h2>Management</h2>
            <ul>
              {predictionDetails?.management.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>

          <div className="details-image-container">
            <img
              src={predictionDetails?.imageUrl}
              alt={predictionDetails?.class}
              className="details-image"
            />
          </div>
        </div>
        <div className="footer">Diagnose. Treat. Grow.</div>
      </div>
    );
  }
};

export default Detect;
