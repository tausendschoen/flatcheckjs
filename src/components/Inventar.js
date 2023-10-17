import {Rating} from "@mui/material";
import {FiberManualRecord} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

const commonStyles = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    width: '100%',
};


export default function Inventar(props) {

    const [value, setValue] = React.useState(0);
    const [label, setLabel] = React.useState(props.label);
    const [error, setError] = React.useState(null);

    let icon = <FiberManualRecord color="white" fontSize="inherit"/>;

    function checkLabel(label) {
        if( props.checkFunction(label) ) {
            setError(`Das Inventar '${label}' gibt es schon`);
        } else
            setError('');
    }

    const handleInputChange = (event) => {
        let label = event.target.value;
        console.log(`handleInputChange '${label}'`);
        // Die Leerzeichen bleiben im Namen, weil der Anwender ev. noch weiterschreiben will
        setLabel(label);
        // hier werden die Leerzeichen rausgenommen
        label = label ? label.trim() : label;
        checkLabel(label);
    };

    function getLabelText() {
        return (Boolean(label) && value) ? `${label} (${labels[value]})` : label;
    }

    return (
        <Paper elevation={0} style={{ padding: '2px', margin: '4px', border: '1px solid lightgrey'}}>
            <Grid container spacing={1} padding={1} width={"100%"} color={"black"} borderColor={'primary.main'}>
                <Grid iten xs={12} sm={6}>
                    <TextField fullWidth={true}
                               sx={{paddingTop: 1, paddingLeft: 1}}
                               error={Boolean(error)}
                               helperText={error}
                               InputProps={{
                                   readOnly: false,
                               }}
                               size="small"
                               onChange={handleInputChange}
                               value={label}
                               variant="standard"/>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px' }}>
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
                    <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>{labels[value]}</Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
            );
}