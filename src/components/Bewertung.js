import * as React from "react";

import {Autocomplete, Divider, List, ListItem, ListItemIcon, Rating} from "@mui/material";
import {Delete, Star} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Inventar from "./Inventar";

const labels = {
    1: 'defekt', 2: 'start gebraucht', 3: 'gebraucht', 4: 'neuwertig', 5: 'neu',
};

const labelsInventar = [{id: 1, label: 'Tür'}, {id: 2, label: 'Türrahmen'}, {id: 3, label: 'Wand'},];




export default function Bewertung() {

    const [value, setValue] = React.useState([]);
    const [hover, setHover] = React.useState(-1);
    const [inventarListe, setInventar] = React.useState();

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    function setInventarValue( item, itemValue ) {
        let localList = [...value];
        localList[item] = itemValue;
        setValue(localList);
    }

    return (
        <>
        <Box sx={{p:"1"}}>
            <Typography variant={"h6"}>Badezimmmer</Typography>
        </Box>
            <Box sx={{p:"2"}}>
            <Inventar  id="1" value="3" set={setInventarValue}/>
        </Box>
            <Divider/>
            <Box sx={{p: 1}}><Button variant={"outlined"}>Inventar</Button></Box>

            <Box sx={{p: 1}}>
                <TextField fullWidth multiline rows={3} label="Zusatzinformationen"></TextField>
            </Box>
        </>);
}