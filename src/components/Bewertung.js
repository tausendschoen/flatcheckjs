import * as React from "react";

import {Autocomplete, List, ListItem, ListItemIcon, ListItemText, Rating} from "@mui/material";
import {AddCircle, Delete, Star, Wifi} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const labels = {
    1: 'defekt',
    2: 'start gebraucht',
    3: 'gebraucht',
    4: 'neuwertig',
    5: 'neu',
};

const labelsInventar= [
{ id: 1, label: 'Tür' },
{ id: 2, label: 'Türrahmen' },
{ id: 3, label: 'Wand' },
];

export default function Bewertung() {


    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }


    return (
        <>
            <Typography variant={"h6"}>Badezimmmer</Typography>
            <List sx={{width: '100%', bgcolor: 'background.paper'}} >
                <ListItem>
                    <ListItemIcon>
                        <Delete/>
                    </ListItemIcon>
                        <ListItem  id="switch-list-label-wifi">
                            <Autocomplete sx={{width: "100%"}}
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={labelsInventar.map((option) => option.label)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search input"
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                        </ListItem>

                        <Box sx={{ alignItems: 'flex-start', width: '25%'}}>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={1}
                                defaultValue={3}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<Star style={{opacity: 0.55}} fontSize="inherit"/>}
                            />
                            {value !== null && (
                                <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                </ListItem>
            </List>
            <Box sx={{p: 1}}>
            <TextField fullWidth multiline rows={3} label="Zusatzinformationen"></TextField>
            </Box>
            <Box sx={{p: 1}}><Button variant={"outlined"}>Inventar</Button></Box>
        </>
    );
}