import Paper from "@mui/material/Paper";

import React, {useRef, useState} from "react";
import SignatureCanvas from 'react-signature-canvas'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";


export default function Signature() {

    const sigRef = useRef( );
    const [signature, setSignature ] = useState(null);

    const handleSignatureEnd = () => {
        setSignature(sigRef.current.toDataURL());
    }
    const clearSignature = () => {
        sigRef.current.clear();
        setSignature(null);
    }

    return(

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: "100%",
                        elevation: "2",
                    }}>
                    <Typography variant="body1" gutterBottom>
                        Unterschrift Mieter
                    </Typography>
                    <SignatureCanvas
                        penColor="green"
                        canvasProps={{className: 'signature'}}
                        ref={sigRef}
                        onEnd={handleSignatureEnd}
                    />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: "100%",
                        elevation: "2",
                    }}>
                    <Typography variant="body1" gutterBottom>
                        Unterschrift Vermieter
                    </Typography>
                    <SignatureCanvas
                        penColor="green"
                        canvasProps={{className: 'signature'}}
                        ref={sigRef}
                        onEnd={handleSignatureEnd}
                    />
                    </Paper>
                </Grid>
            </Grid>

    )
};