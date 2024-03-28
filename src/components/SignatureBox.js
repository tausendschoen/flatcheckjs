import React, {useRef} from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {DeleteOutline} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import SignatureCanvas from "react-signature-canvas";
import {useMediaQuery} from "@mui/material";



export default function SignatureBox(props) {

    const sigRef = useRef();
    const isPrinter = useMediaQuery("print");

    let signatureWidth = 300;
    let signatureHeight = 175;

    console.log(`Printer ${isPrinter}`);

    const handleSignatureEnd = () => {
        //setSignature(sigRef.current.toDataURL());
    }
    const clearSignature = () => {
        sigRef.current.clear();
    }

    return (

        <div className={"signature-box"} >
            <Paper sx={{
                background: '#EEE',
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>
                <SignatureCanvas
                    penColor="black"
                    ref={sigRef}
                    throttle={1}
                    clearOnResize={false}
                    canvasProps={{ width: signatureWidth, height: signatureHeight }}
                    onEnd={handleSignatureEnd}
                />
            </Paper>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton color="primary" aria-label="delete pad" size="large" onClick={clearSignature}>
                    <DeleteOutline />
                </IconButton>
                <Typography variant="body1" gutterBottom sx={{ paddingTop: "0.5em" }}>
                    {props.title}
                </Typography>
            </div>
        </div>


    )
};