
import React from 'react';
import Box from '@mui/material/Box';

function IconBox(props) {

    // CSS-Stil für das Feld
    const boxStyle = {
        width: `100%`,
        height: `300px`,
        backgroundColor: 'lightgray', // Hintergrundfarbe des Felds
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (

        <Box style={boxStyle}>
            {props.icon}
        </Box>
    );
}

export default IconBox;