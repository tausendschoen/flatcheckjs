import React, {useRef} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {DeleteOutline} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import SignatureCanvas from "react-signature-canvas";


export default function SignatureBox(props) {

    const sigRef = useRef();
    // const [signature, setSignature] = useState(null);

    const handleSignatureEnd = () => {
        //setSignature(sigRef.current.toDataURL());
    }
    const clearSignature = () => {
        sigRef.current.clear();
        // setSignature(null);
    }

    return (

        <Grid container spacing={3} >
            <Grid item xs={12} width="100%">
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
                        clearOnResize={false}
                        canvasProps={{height: 300, className: 'sigCanvas'}}
                        onEnd={handleSignatureEnd}
                    />
                </Paper>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton color="primary" aria-label="delete pad" size="large">
                        <DeleteOutline onClick={clearSignature}/>
                    </IconButton>
                    <Typography variant="body1" gutterBottom sx={{paddingTop: "0.5em"}}>
                        {props.title}
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
};