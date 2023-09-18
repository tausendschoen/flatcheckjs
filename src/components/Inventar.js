import {Rating} from "@mui/material";
import {Assignment, FiberManualRecord} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Grid from "@mui/material/Grid";


const labels = {
    1: 'defekt', 2: 'start gebraucht', 3: 'gebraucht', 4: 'neuwertig', 5: 'neu',
};



/**
 * Eine Inventar eines ZimmerListe. Ein Inventar ist z.B. eine Tür oder eine Steckdose.
 * Jees Inventar hat innerhalb des Zimmers einen eindeutigen Namen und einen Wert / Status.
 * Dieser Status gibt den Zustand des Inventares an.
 *
 * @param {Object} props - Property object
 * @param {id} props.id - id des Inventares aus der Inventarliste
 * @param {id} props.label - id des Inventares aus der Inventarliste
 * @param {id} props.value - Gebrauchtstatus des Inventars
 * @param {id} props.set - Funktion zum setzen eines neuen Wertes set(<id>,<wert>)
 * @return {JSX.Element}
 * @constructor
 */
export default function Inventar(props) {

    // TODO lokalen state nutzen für den Label
    // TODO Wenn der Namen oder die Zimmer geändert wird, dann muss das persistiert werden

    //const [value, setValue] = React.useState(2);
    const [value, setValue] = React.useState(0);


    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    function newLabel( label ) {
        props.set( props.id, label, props.value);
    }

    let disabled = props.label !== "";

    return (<>
        <Grid container spacing={2} paddingTop={1} paddingBottom={2}>
            <Grid item xs={1}> <Assignment/></Grid>
            <Grid iten xs={7}>
                <TextField fullWidth={true} disabled={disabled}
                           onChange={(event, newValue) => {
                               newLabel(newValue);
                           }}
                           label={props.label} variant="standard" />
            </Grid>
            <Grid  item xs={2}  >
                <Rating

                    name="hover-feedback"
                    value={value}
                    precision={1}
                    defaultValue={0}
                    getLabelText={getLabelText}
                    icon={<FiberManualRecord fontSize="inherit" />}

                    onChange={(event, newValue) => {
                        console.log("onChange " + newValue);
                        setValue(newValue)
                    }}
                    emptyIcon={<FiberManualRecord fontSize="inherit" />}
                />
            </Grid>
            <Grid item xs={2} width={"100%"}>
                <Box sx={{ textAlign: 'left', width: "100%" }} >{labels[value]}</Box>
            </Grid>
        </Grid>

    </>);
}