
import React, {useContext} from "react";
import Grid from "@mui/material/Grid";
import SignatureBox from "./SignatureBox";
import {HeaderContext} from "./HeaderContext";



export default function Signature(props) {

    const headerContextData = useContext(HeaderContext);

    return (

        <Grid container spacing={3} >
            <Grid item xs={12} md={6} width="100%" >
                   <SignatureBox title={"Unterschrift Mieter "+ headerContextData.mieter} />
            </Grid>

            <Grid item xs={12} md={6}>
                <SignatureBox title={"Unterschrift Vermieter "+ headerContextData.vermieter} />
            </Grid>
        </Grid>

    )
};