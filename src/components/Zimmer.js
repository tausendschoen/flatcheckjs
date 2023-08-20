import * as React from "react";

import {Divider, FormControlLabel, FormGroup, InputAdornment, Switch} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Inventar from "./Inventar";
import InventarDialog from "../dialog/InventarDialog";
import {Gradient, House} from "@mui/icons-material";
import Grid from "@mui/material/Grid";


const labelsInventar = ["Tür", "Türzarge", "Wand", "Boden", "Fußleisten", "Decke", "Steckdosen", "Schalter", "Heizung",
    "Fenster"];


export default function Zimmer() {

    const [inventar, setInventar] = React.useState([]);
    // Darstellung des InventarDialogs
    const [open, setOpen] = React.useState(false);

    // Sortieren des Array.
    labelsInventar.sort();
    let zimmerInventar = labelsInventar.concat(['', '']);

    // initialiere Inventar
    if (inventar.length == 0) {
        for (let i = 0; i < zimmerInventar.length; i++) {
            inventar[i] = {label: zimmerInventar[i], value: 0};
        }
    }

    function setInventarValue(id, label, value) {
        console.log("setInventarValue " + id + " " + "label" + value);
        let localList = [...inventar];
        localList[id] = {label: label, value: value};
        localList[id] = {label, value};
        setInventar(localList);
    }

    function addInventar() {
        console.log("addInventar");
        setOpen(true);
    }

    function openDialog() {
        console.log("openDialog");
        setOpen(true);
    }

    function closeDialog(item) {
        setOpen(false);
    }

    console.log("Zimmer: >");

    return (
        <>
            <Box sx={{p: "1"}}>
                <Typography variant={"h6"}>Badezimmmer</Typography>
            </Box>
            <Box sx={{p: "2"}}>
                {inventar.map((element, index) => {
                    return (
                        <Inventar id={index} label={element.label} set={setInventarValue}/>
                    )
                })
                }
            </Box>
            <Divider/>
            <Button sx={{m: 1}} variant={"outlined"} onClick={openDialog}>Inventar</Button>
            <InventarDialog open={open} handleClose={closeDialog} items={labelsInventar}/>
            <Box sx={{p: 1}}>
                <TextField fullWidth multiline rows={3} label="Zusatzinformationen"></TextField>
            </Box>
            <Grid container spacing={3} paddingTop={1} paddingLeft={1} paddingBottom={2}>
                <Grid item xs={6}>
                    <TextField
                        id="heizungszaehler"
                        label="Heizungszähler"
                        required={true}
                        fullWidth={true}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Gradient/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Wohnungstürschlüssel" />
                    </FormGroup>
                </Grid>
            </Grid>
        </>);
}