import * as React from 'react';
import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function Begehungsgrund() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <><FormControl variant="standard" fullWidth size="small">
            <InputLabel id="demo-simple-select-standard-label">Begehungsgrund</InputLabel>
            <Select
                labelId="wohnungsbegehungsgrund"
                id="wbg1"
                value={value}
                fullWidth
                onChange={handleChange}
            >

                <MenuItem value={0}>Auszug</MenuItem>
                <MenuItem value={1}>Einzug</MenuItem>
                <MenuItem value={2}>Wesentliche Änderung</MenuItem>
                <MenuItem value={3}>Wohnungsbesichtigungen</MenuItem>
                <MenuItem value="99"><em>Sonstiges</em></MenuItem>
            </Select>
        </FormControl>
        </>

    );
}
