import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularProgressWithLabel(props) {

    console.log(props);
    let color = 'green';
    let value = props.value;
    if( value == 0 ) {
        value = "100";
        color = "orange";
    }

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress style={{'color': color}} variant="determinate" {...props} value={value} thickness={4} size={"3rem"}/>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary" >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}
