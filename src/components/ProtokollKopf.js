import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

export default function ProtokollKopf() {
    return (
            <Paper sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="datum"
                        name="Datum"
                        label="Datum"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="mietername"
                        name="mietername"
                        label="Name Mieter"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="email_mieter"
                        name="email_mieter"
                        label="EMail Mieter"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="vermieter"
                        name="vermieter"
                        label="Vermieter"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

            </Grid>
            </Paper>
    );
}