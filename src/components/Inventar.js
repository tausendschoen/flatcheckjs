import {Rating} from "@mui/material";
import {FiberManualRecord} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
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
    const [label, setLabel] = React.useState(props.label);

    let icon = <FiberManualRecord color="white" fontSize="inherit"/>;


    function getLabelText() {
        return labels[value] ? label + " (" + labels[value] + ")" : label;
    }

    console.log("redraw");

    return (
        <>
            <Grid container spacing={1} padding={1} width={"100%"}>
                <Grid iten xs={8}>
                    <TextField fullWidth={true}
                               sx={{paddingTop: 0}}
                               InputProps={{
                                   readOnly: false,
                                   padding: "0px"
                               }}
                               onChange={(event, newValue) => {
                                   console.log("NewValue: " + event.target.value);
                                   setLabel(event.target.value);
                               }
                               }
                               value={getLabelText()}
                               variant="standard"/>
                </Grid>
                <Grid item xs={4}>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={1}
                        defaultValue={0}

                        icon={icon}
                        emptyIcon={icon}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                    />
                </Grid>

            </Grid>

        </>);
}