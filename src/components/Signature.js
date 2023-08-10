import Paper from "@mui/material/Paper";

import React, {useRef, useState} from "react";
import SignatureCanvas from 'react-signature-canvas'


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

        <Paper sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: "100%",
            elevation: "2",
        }}>
            <SignatureCanvas
                penColor="green"
                canvasProps={{className: 'signature'}}
                ref={sigRef}
                onEnd={handleSignatureEnd}
            />

        </Paper>
    )
};