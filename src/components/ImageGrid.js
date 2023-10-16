import React, { useState, useEffect, useRef } from "react";
import WebcamDialog from "./WebcamDialog"; // Importieren Sie Ihre Webcam-Dialog-Komponente hier
import DeleteIcon from "@mui/icons-material/Delete";

const ImageGrid = () => {

    const [openDialog, setOpenDialog] = useState(true);

    const [images, setImages] = useState([]);
    const gridRef = useRef(null);

    const handleCapture = (image) => {
        setImages((prevImages) => [...prevImages, image]);
    };

    const deleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };


    useEffect(() => {
        // Wenn sich die Fenstergröße ändert, berechnen Sie die Anzahl der Bilder pro Zeile basierend auf der Fensterbreite.
        const handleResize = () => {
            const grid = gridRef.current;
            // const containerWidth = grid.offsetWidth;
            const minImageSize = 240; // Mindestgröße für Bilder
            // const minImagesPerRow = Math.floor(containerWidth / minImageSize);
            grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${minImageSize}px, 1fr))`;
        };

        handleResize(); // Initialisieren Sie das Grid basierend auf der aktuellen Fenstergröße.

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div>
            <WebcamDialog open={openDialog} onClose={() => setOpenDialog(false)} onCapture={handleCapture} />

            <div
                ref={gridRef}
                style={{
                    display: "grid",
                    gap: "10px",
                }}
            >
                {images.map((image, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <img src={image} alt={`Bild ${index}`} style={{ width: "100%" }} />
                        <button
                            onClick={() => deleteImage(index)}
                            style={{
                                position: "absolute",
                                bottom: "10px",
                                left: "10px",
                                backgroundColor: "white",
                                padding: "5px",
                                borderRadius: "50%",
                            }}
                        >
                            <DeleteIcon style={{ color: "blue" }} />
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ImageGrid;
