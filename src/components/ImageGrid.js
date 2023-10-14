import React, { useState, useEffect, useRef } from "react";
import WebcamDialog from "./WebcamDialog"; // Importieren Sie Ihre Webcam-Dialog-Komponente hier
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import {Camera} from "@mui/icons-material"; // Importieren Sie das Löschen-Icon

const ImageGrid = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [images, setImages] = useState([]);
    const gridRef = useRef(null);

    const handleCapture = (image) => {
        setCapturedImage(image);
        setImages((prevImages) => [...prevImages, image]);
    };

    const deleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const showCamera = () => {
        setOpenDialog(!openDialog);
    };

    useEffect(() => {
        // Fügen Sie hier optionalen Code hinzu, um Bilder aus verschiedenen Quellen oder APIs abzurufen und sie zum Grid hinzuzufügen.
    }, []);

    useEffect(() => {
        // Wenn sich die Fenstergröße ändert, berechnen Sie die Anzahl der Bilder pro Zeile basierend auf der Fensterbreite.
        const handleResize = () => {
            const grid = gridRef.current;
            const containerWidth = grid.offsetWidth;
            const minImageSize = 240; // Mindestgröße für Bilder
            const minImagesPerRow = Math.floor(containerWidth / minImageSize);
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
            <Button
                variant={"contained"}
                onClick={showCamera}
                startIcon={<Camera/>}
            >
                Fotos
            </Button>
        </div>
    );
};

export default ImageGrid;
