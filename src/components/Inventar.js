import {makeStyles, Rating} from "@mui/material";
import {Assignment, FiberManualRecord} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';


const labels = {
    1: 'defekt', 2: 'stark gebraucht', 3: 'gebraucht', 4: 'neuwertig', 5: 'neu',
};

const CustomRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'gold', // Ändere hier die gewünschte Farbe
    },
})

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
    const [ratingColor, setRatingColor] = React.useState("grey");
    let icon = <FiberManualRecord color="white"  fontSize="inherit" />;

    function newLabel( label ) {
        props.set( props.id, label, props.value);
    }

    function getLabelText()  {
        let retValue = "";
        if( labels[value] )
            retValue = props.label + " (" + labels[value] + ")";
        else
            retValue = props.label ;

        return retValue;
    }



    function handleMouseMove(event, newValue) {
        switch( newValue ) {
            case 1 :
                setRatingColor("orange");
                break;
            case 2 :
                setRatingColor("yellow");
                break;
            case 3 :
                setRatingColor("grey");
                break;
            case 4 :
                setRatingColor("green");
                break;
            case 5 :
                setRatingColor("green");
                break;

            default:
                setRatingColor("grey");
        }
        icon = <FiberManualRecord style={{color: ratingColor}}  fontSize="inherit" />;
        console.log("log " + newValue +  " " + icon);
    }

    // wenn das Textfeld keinen Wert hat, dann kann dieser eingegeben werden. Ansonsten ist
    // der Wert/ Name des Textfeldes fest definiert
    let readonly = props.label !== "";

    console.log("redraw");

    return (<>
        <Grid container spacing={1} padding={1} width={"100%"}>
            <Grid iten xs={12} sm={9}>
                <TextField fullWidth={true}
                           sx={{paddingTop: 0}}
                           InputProps={{
                               readOnly: readonly,
                               padding: "0px"
                           }}
                           onChange={(event, newValue) => {
                               newLabel(newValue);
                           }}
                           value={getLabelText()}
                           variant="standard" />
            </Grid>
            <Grid  item xs={12} sm={3}  >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    defaultValue={0}

                    onChange={handleMouseMove}
                    onChangeActive={handleMouseMove}
                    onMouseLeave={handleMouseMove}
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