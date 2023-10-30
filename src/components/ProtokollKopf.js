import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {InputAdornment} from "@mui/material";
import {
    AddLocation,
    Apartment,
    CalendarToday,
    Contacts,
    Email,
    Gradient,
    Group,
    Person,
    Place
} from "@mui/icons-material";

import {HeaderContext, HeaderDispatchContext} from "./HeaderContext";
import {useContext, useState} from "react";
import {getCurrentDate, getCurrentDateTime} from "./helperFunctions";


export default function ProtokollKopf() {

    const headerContext = useContext(HeaderContext);
    const dispatch = useContext(HeaderDispatchContext);
    const [dateTime, setDateTime] = useState(getCurrentDate());

    function setValue( event, type ) {
        if( type === "mieter" )
            dispatch({action: "mieter", value: event.target.value})
        else
            dispatch({action: "vermieter", value: event.target.value})
    }


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

            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        required
                        id="wohnung"
                        name="Wohnung"
                        label="Wohnung"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Apartment/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        required
                        id="datum"
                        name="Datum"
                        label="Datum"
                        type={"date"}
                        value={dateTime}
                        fullWidth
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CalendarToday/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="adresseWhg"
                        name="Adresse Wohnung"
                        label="Adresse Wohnung"
                        fullWidth
                        variant="standard"
                        size={"small"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Contacts/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="mietername"
                        name="mietername"
                        label="Name Mieter"
                        fullWidth
                        onChange={ (e) => setValue(e, "mieter") }
                        variant="standard"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="neueAdresse"
                        name="neueAdresse"
                        label="Neue Adresse"
                        fullWidth
                        variant="standard"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddLocation/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email_mieter"
                        name="email_mieter"
                        label="EMail Mieter"
                        fullWidth
                        variant="standard"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="teilneherVermieter"
                        name="vermieter"
                        label="Teilnehmer Vermieter"
                        fullWidth
                        variant="standard"
                        onChange={ (e) => setValue(e, "vermieter") }
                        ize="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Group/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

            </Grid>
        </Paper>
    );
}