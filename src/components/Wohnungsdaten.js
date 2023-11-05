import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, {useContext, useState} from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {InputAdornment} from "@mui/material";
import {Apartment, CalendarToday, Contacts, Group} from "@mui/icons-material";

import {HeaderDispatchContext} from "./HeaderContext";
import {getCurrentDate} from "./helperFunctions";
import Begehungsgrund from "./Begehungsgrund";


export default function Wohnungsdaten() {

    const dispatch = useContext(HeaderDispatchContext);
    const [dateTime, setDateTime] = useState(getCurrentDate());
    const [appartmentName, setAppartmentName] = useState("");


    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDateTime(selectedDate);
    };

    console.log("A: '" + appartmentName + "'");
    if (appartmentName !== "")
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
                        onChange={(e) => {
                            setAppartmentName(e.target.value)
                        }}

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
                        onChange={handleDateChange}
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
                <Grid item xs={12} md={6}>
                    <TextField
                        id="teilneherVermieter"
                        name="vermieter"
                        label="Teilnehmer Vermieter"
                        fullWidth
                        variant="standard"
                        onChange={ (e) => {dispatch({action: "vermieter", value: e.target.value})}}
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Group/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Begehungsgrund/>
                </Grid>


            </Grid>
        </Paper>
    );
}