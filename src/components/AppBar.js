import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import {Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const version = "0.1.9";

export default function ButtonAppBar(props) {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState( null );

    const handleClick = (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

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
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Version {version}</MenuItem>
                    </Menu>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Wohnungszustandsprotokoll
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}