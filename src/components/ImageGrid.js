import React, {useEffect, useRef} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

const ImageGrid = (props) => {

    const images = props.images;
    const deleteImageFnc = props.deleteFunction;
    const imagesPerRow = 3; // Anzahl der Bilder pro Zeile
    const imagesPerPage = imagesPerRow * 2;

    const gridRef = useRef(null);

    useEffect(() => {
        // Wenn sich die Fenstergröße ändert, berechnen Sie die Anzahl der Bilder pro Zeile basierend auf der Fensterbreite.
        const handleResize = () => {
            const grid = gridRef.current;
            const containerWidth = grid.offsetWidth;
            const imageWidth = containerWidth / imagesPerRow - 10;
            const minImageSize = 300;
            grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${minImageSize}px, 1fr))`;
        };

        handleResize(); // Initialisieren Sie das Grid basierend auf der aktuellen Fenstergröße.

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            {images.length > 0 && (
                <div
                    className={"page-break"}
                    style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: "10px"
                }}>
                    <Typography variant="subtitle1" component="div" sx={{flexGrow: 1}}>Fotos {props.title}</Typography>
                </div>
            )}

            <div
                ref={gridRef}
                style={{
                    paddingTop: "10px",
                    display: "grid",
                    gap: "10px",
                }}
            >

                {images.map((image, index) => (
                    <div key={index}
                         style={{position: "relative", justifyContent: "center", margin: "5px"}}>
                        <img src={image} alt={`Bild ${index}`} style={{width: "100%"}}/>
                        <button
                            onClick={() => deleteImageFnc(index)}
                            style={{
                                position: "absolute",
                                bottom: "12px",
                                left: "10px",
                                border: "0px",
                                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                                padding: "5px",
                                borderRadius: "50%",
                            }}
                        >
                            <DeleteIcon style={{color: "blue"}}/>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ImageGrid;
