import React, {useRef, useState} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {DeleteOutline} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import SignatureCanvas from "react-signature-canvas";


export default function SignatureBox( props ) {

    const sigRef = useRef();
    const [signature, setSignature] = useState(null);

    const handleSignatureEnd = () => {
        setSignature(sigRef.current.toDataURL());
    }
    const clearSignature = () => {
        sigRef.current.clear();
        setSignature(null);
    }

    return (

        <Grid container spacing={3} >
            <Grid item xs={12} width="100%">
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: "100%",
                    elevation: "2",
                }}>
                    <Grid container spacing={0} direction="row" alignItems="baseline" margin={0}>
                        <Grid item xs={3} padding={0} >
                            <IconButton color="primary" aria-label="delete pad" size="large">
                                <DeleteOutline onClick={clearSignature}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body1" gutterBottom>
                                Unterschrift Mieter
                            </Typography>
                        </Grid>
                    </Grid>

                    <SignatureCanvas
                        penColor="black"
                        canvasProps={{className: 'signature'}}
                        ref={sigRef}
                        onEnd={handleSignatureEnd}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
};