import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {InputAdornment} from "@mui/material";
import {
    AddLocation,
    Email,
    Person, Phone,
} from "@mui/icons-material";

import {HeaderDispatchContext} from "./HeaderContext";
import {useContext, useState} from "react";
import EmailInput from "./EMailInput";

export default function MieterDaten() {

    const dispatch = useContext(HeaderDispatchContext);

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
                Mieter
            </Typography>

            <Grid container spacing={1}>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="mietername"
                        name="mietername"
                        label="Name"
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

                <Grid item xs={12} md={6}>
                    <EmailInput
                        required
                        id="email_mieter"
                        name="email_mieter"
                        label="EMail"
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
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="telefon"
                        name="telefon"
                        label="Telefon"
                        fullWidth
                        variant="standard"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
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

            </Grid>
        </Paper>
    );
}