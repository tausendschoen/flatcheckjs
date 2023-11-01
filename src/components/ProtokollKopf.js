import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
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

import {HeaderDispatchContext} from "./HeaderContext";
import {useContext, useState} from "react";
import {getCurrentDate, getCurrentDateTime} from "./helperFunctions";


export default function ProtokollKopf() {

    const dispatch = useContext(HeaderDispatchContext);
    const [dateTime, setDateTime] = useState(getCurrentDate());
    const [appartmentName, setAppartmentName] = useState("");

    console.log("A: '" + appartmentName + "'");
    if( appartmentName !== "")
        document.title = "Protokoll-" + dateTime + "-" + appartmentName;
    else
        document.title = "Protokoll-" + dateTime;
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
                        onChange={(e) => {setAppartmentName(e.target.value)}}

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
                        onChange={ (e) => {dispatch({action: "mieter", value: e.target.value})}}
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
                        onChange={ (e) => {dispatch({action: "mieterEmail", value: e.target.value})}}
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
                        onChange={ (e) => {dispatch({action: "vermieter", value: e.target.value})}}
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