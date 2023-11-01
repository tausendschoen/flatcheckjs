import React, {useState, useRef, useEffect} from "react";
import Webcam from "react-webcam";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import {Cameraswitch, NoPhotography} from "@mui/icons-material";
import IconBox from "./IconBox";

const WebcamDialog = ({ open = true, onClose, onCapture }) => {


    const webcamRef = useRef(null);
    const [selectedCamera, setSelectedCamera] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [cameras, setCameras] = useState([]);

    const handleCapture = () => {
        setButtonDisabled(true);

        try {
            const imageSrc = webcamRef.current.getScreenshot();
            onCapture(imageSrc);
        }catch (e) {}

        setTimeout(() => {
            setButtonDisabled(false); // Aktiviere den Button nach 0,5 Sekunden
        }, 500);
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
                await navigator.mediaDevices.getUserMedia({audio: false, video: true});
                let devices = await navigator.mediaDevices.enumerateDevices();
                console.log(devices);

                devices.map((device) => { console.log(device.label); return "";});
                const videoDevices = devices.filter((device) => device.kind === "videoinput");
                const deviceIds = videoDevices.map((device) => device.deviceId);
                setCameras(deviceIds);
                console.log("Cameras found " + videoDevices.length );

                if (deviceIds.length > 0 && deviceIds[0] ) {
                    setSelectedCamera(deviceIds[0]);
                    console.log(`Camera selected ${deviceIds[0]}`);
                }


            } catch (error) {
                console.error("Fehler beim Abrufen der Kameras:", error);
            }
        };

        if (open) {
            getCameras().then();
        }
    }, []);

    let cameraWindow;
    if( selectedCamera ) {
        cameraWindow =  <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
                deviceId: selectedCamera,
            }}
            style={{width: "100%", height: "400px"}}
            />;
    }
    else {
        if( !buttonDisabled)
            setButtonDisabled(true);
         cameraWindow = <IconBox icon={<NoPhotography sx={{ fontSize: 40 }}/>} />;
    }



    console.log(`WebcamDialog render ${open} selected '${selectedCamera}' Kameras ${cameras.length}`);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth sx={{m:"0", p:"0"}}>
            <DialogContent sx={{m: "0", p: "0"}}>
                <Grid container spacing={1} padding={1} width={"100%"}>
                    <Grid iten xs={6}>
                        {cameras.length > 1 && (
                        <div style={{display: "flex", justifyContent: "left", width: "45%"}}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleCameraSwitch}
                            >
                                <Cameraswitch/>
                            </IconButton>
                        </div>
                            )}
                    </Grid>
                    <Grid iten xs={6} alignItems={"right"} margin={"0"}>
                        <div style={{display: "flex", justifyContent: "right"}}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={onClose}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                <div style={{display: "flex", justifyContent: "center"}}>
                    {cameraWindow}
                </div>
            </DialogContent>
            <DialogActions sx={{m: "0", p: "0 1 0 0"}}>
                <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <Button
                        onClick={handleCapture}
                        variant="contained"

                        color="primary"
                        disabled={!selectedCamera && buttonDisabled}
                        startIcon={<PhotoCameraIcon/>}
                    >
                        Aufnehmen
                    </Button>
                </div>

            </DialogActions>
        </Dialog>
    );
};

export default WebcamDialog;
