import Paper from "@mui/material/Paper";

import React, {useRef, useState} from "react";
import SignatureCanvas from 'react-signature-canvas'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {DeleteOutline} from "@mui/icons-material";
import SignatureBox from "./SignatureBox";

function DeleteIcon() {
    return null;
}

export default function Signature() {


    return (

        <Grid container spacing={3} >
            <Grid item xs={12} sm={6} width="100%" >
                   <SignatureBox title="Unterschrift Mieter" />
            </Grid>

            <Grid item xs={12} sm={6}>
                    <SignatureBox title="Unterschrift Vermieter" />
            </Grid>
        </Grid>

    )
};