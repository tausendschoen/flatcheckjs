import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import {Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AboutDialog from "../dialog/AboutDialog";
import HelpDialog from "../dialog/HelpDialog";


export default function ButtonAppBar(props) {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState( null );
    const [aboutDialog, setAboutDialog] = React.useState( false );
    const [helpDialog, setHelpDialog] = React.useState( false );

    function handleOpenMenuItem(event, item) {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    }

    function handleCloseMenuItem(event, item) {
        setOpen(false);
        setAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={(e) => handleOpenMenuItem(e, 1)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={(e) => handleCloseMenuItem(e, 1)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={(e) => {setOpen(false); setHelpDialog(true) }}>Hilfe...</MenuItem>
                        <MenuItem onClick={(e) => {setOpen(false); setAboutDialog(true)}}>Über</MenuItem>
                    </Menu>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Wohnungszustandsprotokoll
                    </Typography>
                </Toolbar>
            </AppBar>
            {aboutDialog && (<AboutDialog closeFunction={() => setAboutDialog(false)}/>)}
            {helpDialog && (<HelpDialog closeFunction={() => setHelpDialog(false)}/>)}
        </Box>
    );
}