import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DoorFront, ElectricalServices, House, MarkunreadMailbox} from "@mui/icons-material";
import {InputAdornment} from "@mui/material";

export default function Schluessel() {
    return (
        <React.Fragment>
            <Paper sx={{
                p: 2,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>
                <Typography variant="h6" gutterBottom>
                    Schlüssel
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="hausschluessel"
                            label="Hausschlüssel"
                            required={true}
                            fullWidth={true}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <House />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="wohnungschluessel"
                            label="Wohnungschlüssel"
                            required={true}
                            type="number"
                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DoorFront />
                            </InputAdornment>
                        ),
                    }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="briefkastenschluessel"
                            label="Briefkasten"
                            required={true}
                            type="number"
                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MarkunreadMailbox />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField

                            id="hausanschlussschluessel"
                            label="Hausanschluss"
                            required={true}
                            type="number"
                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ElectricalServices />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}