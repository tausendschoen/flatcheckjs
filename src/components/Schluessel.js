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

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="standard"
                            id="hausschluessel"
                            label="Hausschlüssel"
                            required={true}
                            fullWidth={true}
                            type="number"
                            size="small"
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
                            variant="standard"
                            id="wohnungschluessel"
                            label="Wohnungschlüssel"
                            required={true}
                            size="small"
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
                            size="small"
                            type="number"
                            fullWidth={true}
                            variant="standard"
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
                            variant="standard"
                            id="hausanschlussschluessel"
                            label="Hausanschluss"
                            size="small"
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