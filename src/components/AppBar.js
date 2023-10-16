import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const version = "0.1.2";

export default function ButtonAppBar(props) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Wohnungszustandsprotokoll {version}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}