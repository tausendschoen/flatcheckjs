import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const WebcamDialog = ({ open = true, onClose, onCapture }) => {


    const webcamRef = useRef(null);
    const [selectedCamera, setSelectedCamera] = useState("");
    const [cameras, setCameras] = useState([]);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc);
    };

    const handleCameraSwitch = () => {
        if (cameras.length > 1) {
            const newCamera =
                cameras[(cameras.indexOf(selectedCamera) + 1) % cameras.length];
            setSelectedCamera(newCamera);
        }
    };


    useEffect(() => {
        const getCameras = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = devices.filter((device) => device.kind === "videoinput");
                const deviceIds = videoDevices.map((device) => device.deviceId);
                setCameras(deviceIds);
                if (deviceIds.length > 0) {
                    setSelectedCamera(deviceIds[0]);
                }
            } catch (error) {
                console.error("Fehler beim Abrufen der Kameras:", error);
            }
        };

        if (open) {
            getCameras();
        }
    }, [open]);

    console.log("WebcamDialog render = " + open);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogContent>
                <div style={{ display: "flex", justifyContent: "right", width: "100%" }}>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
                </div>
                {selectedCamera && (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{
                            deviceId: selectedCamera,
                        }}
                        style={{ width: "100%" }}
                    />
                )}
            </DialogContent>
            <DialogActions >
                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <Button
                        onClick={handleCapture}
                        variant="contained"
                        color="primary"
                        disabled={!selectedCamera}
                        startIcon={<PhotoCameraIcon />}
                    >
                        Aufnehmen
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default WebcamDialog;
