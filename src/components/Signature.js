
import React from "react";
import Grid from "@mui/material/Grid";
import SignatureBox from "./SignatureBox";


export default function Signature() {

    return (

        <Grid container spacing={3} >
            <Grid item xs={12} md={6} width="100%" >
                   <SignatureBox title="Unterschrift Mieter" />
            </Grid>

            <Grid item xs={12} md={6}>
                    <SignatureBox title="Unterschrift Vermieter" />
            </Grid>
        </Grid>

    )
};