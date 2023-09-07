import * as React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    FormControlLabel,
    FormGroup,
    InputAdornment,
    Switch
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Inventar from "./Inventar";
import {AddCircle, ExpandLess, ExpandMore, Gradient} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";


export const Inventar_Zimmer = ["Tür", "Türzarge", "Wand", "Boden", "Fußleisten", "Decke", "Steckdosen", "Schalter", "Heizung",
    "Fenster"];

export const Inventar_Gäste_WC = [...Inventar_Zimmer, "WC-Sitz", "WC", "Spülkasten", "Waschbecken", "Wasserhahn", "Toilettenpapierhalter", "Spiegel"];

export const Inventar_WC = [...Inventar_Gäste_WC, "Duschtrennwand", "Duschvorhang", "Badewanne", "Badewannenarmatur"];

export const Inventar_Balkon = ["Boden", "Decke", "Wände", "Glas", "Fenster", "Oberlicht"];

export const Inventar_Keller = ["Tür", "Boden", "Schalter", "Steckdose", "Fenster"];


/**
 *
 * @param schlüssel {boolean} gibt an ob der Raum einen Schlüssel hat
 * @param heizungszähler {boolean} gibt an ob der Raum eine Heizung hat
 * @param inventarListe {array} Liste des Inventars, dass kontrolliert werden soll
 * @param sonstiges {number} Anzahl der Zusatzfelder
 * @return {JSX.Element}
 * @constructor
 */
export default function Zimmer(props) {

    const [inventar, setInventar] = React.useState([]);
    // Darstellung des InventarDialogs
    const [open, setOpen] = React.useState(false);
    // define variable for the card Actionbutton
    let iconButton;
    // initialize the variable with the current state
    handleClick(open);

    let inventarListe = props.inventarListe;
    let sonstiges = props.sonstiges;

    // Sortieren des Array.
    for (let i = 0; i < sonstiges; i++)
        inventarListe = inventarListe.concat(['']);

    // initialisiere Inventar
    if (inventar.length === 0) {
        for (let i = 0; i < inventarListe.length; i++) {
            inventar[i] = {label: inventarListe[i], value: 0};
        }
    }

    function setInventarValue(id, label, value) {
        console.log("setInventarValue " + id + " " + "label" + value);
        let localList = [...inventar];
        localList[id] = {label: label, value: value};
        localList[id] = {label, value};
        setInventar(localList);
    }

    console.log("Zimmer: >");

    let cardContent = "";
    if (open === true)
        cardContent =
            <CardContent>
                <Grid container spacing={3} paddingTop={1} paddingLeft={1} paddingBottom={2}>
                <Grid item xs={6}>
                    <TextField id="heizungszähler" label="Heizungszähler" required={true}
                               fullWidth={true} type="number"
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
                    <FormGroup><FormControlLabel control={<Switch defaultChecked/>}
                                                 label="Schlüssel"/></FormGroup>
                </Grid>
            </Grid>
            <Box sx={{p: "2"}}>
                {inventar.map((element, index) => {
                    return (
                        <Inventar id={index} label={element.label} set={setInventarValue}/>
                    )
                })
                }
            </Box>
            <Divider/>
            <Box sx={{m: 1}}>
                <TextField fullWidth multiline rows={3} label="Zusatzinformationen"></TextField>
            </Box>
            </CardContent>;



    function handleClick(openState = true) {
        if( open !== openState )
            setOpen(!open);

        if( open )
            iconButton  = <ExpandLess fontSize={"large"}/>
        else
            iconButton =  <ExpandMore fontSize={"large"}/>
    }

    return (
            <>
                <Card variant="outlined" sx={{m: 1}}>
                    <CardHeader
                        action={
                            <IconButton aria-label="Hinzufügen" onClick={handleClick}>
                                {iconButton}
                            </IconButton>
                        }
                        title={props.name}
                        subheader="Aufnahme des Zustands des Raumes und des Inventars"
                    />
                    {cardContent}
                </Card>
            </>)
    ;
}