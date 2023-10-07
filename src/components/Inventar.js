import {Rating} from "@mui/material";
import {Assignment, FiberManualRecord} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as React from "react";
import Grid from "@mui/material/Grid";


const labels = {
    1: 'defekt', 2: 'stark gebraucht', 3: 'gebraucht', 4: 'neuwertig', 5: 'neu',
};

/**
 * Eine Inventar eines ZimmerListe. Ein Inventar ist z.B. eine Tür oder eine Steckdose.
 * Jees Inventar hat innerhalb des Zimmers einen eindeutigen Namen und einen Wert / Status.
 * Dieser Status gibt den Zustand des Inventares an.
 *
 * @param {Object} props - Property object
 * @param {id} props.id - id des Inventares aus der Inventarliste
 * @param {id} props.label - der Name des Inventares aus der Inventarliste
 * @param {id} props.value - Gebrauchtstatus des Inventars
 * @param {id} props.set - Funktion zum setzen eines neuen Wertes set(<id>,<wert>)
 * @return {JSX.Element}
 * @constructor
 */
export default function Inventar(props) {


    const [value, setValue] = React.useState(0);

    function newLabel( label ) {
        props.set( props.id, label, props.value);
    }

    function getLabelText()  {
        let retValue = "";
        if( labels[value] )
            retValue = props.label + " (" + labels[value] + ")";
        else
            retValue = props.label ;

        console.log(retValue);
        return retValue;
    }

    // wenn das Textfeld keinen Wert hat, dann kann dieser eingegeben werden. Ansonsten ist
    // der Wert/ Name des Textfeldes fest definiert
    let readonly = props.label !== "";

    console.log("redraw");

    return (<>
        <Grid container spacing={2} paddingTop={1} paddingBottom={2} >
            <Grid item xs={1}><Assignment /></Grid>
            <Grid iten xs={8}>
                <TextField fullWidth={true}
                           sx={{paddingTop: 1}}
                           InputProps={{
                               readOnly: readonly,
                           }}
                           onChange={(event, newValue) => {
                               newLabel(newValue);
                           }}
                           value={getLabelText()}
                           variant="standard" />
            </Grid>
            <Grid  item xs={3}  >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    defaultValue={0}

                    icon={<FiberManualRecord fontSize="inherit" />}

                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    emptyIcon={<FiberManualRecord fontSize="inherit" />}
                />
            </Grid>

        </Grid>

    </>);
}