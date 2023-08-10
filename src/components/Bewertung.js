import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {Paper} from "@mui/material";

export default function ProtokollKopf() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Wohnungsdaten
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="wohnung"
                        name="Wohnung"
                        label="Wohnung"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}