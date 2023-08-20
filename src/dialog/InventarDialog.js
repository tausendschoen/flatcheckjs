import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import {Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";

function InboxIcon() {
    return null;
}

function CommentIcon() {
    return null;
}

/**
 *
 * @param {Object} props - Property object
 * @param {id} props.handleClose - function = Called when dialog is closed. Fnc gets id of item do add
 * @param {id} props.items - array = List of items to display
 * @return {JSX.Element}
 * @constructor
 */
export default function InventarDialog(props) {

    const [checked, setChecked] = React.useState([0]);

    console.log("InventarDialog " + props.open);

    function closeDialog() {
        console.log("closeDialog " + checked);
        props.handleClose(checked);
        setChecked([]);
    }

    function cancelDialog() {
        props.handleClose(null);
        setChecked([]);
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    return (
        <>
            <Dialog open={props.open} onClose={closeDialog}>
                <DialogTitle>Inventar wählen</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Wählen Sie bitte ein Inventar aus, dass Sie hinzufügen möchten
                    </DialogContentText>
                    <List disablePadding sx={{

                        marginTop: "10px",
                        width: '100%',
                        height: "200px",
                        maxHeight: "200px",
                        border: "1px solid #f5f5f5",
                        position: 'relative',
                        overflow: 'auto',
                        '& ul': {padding: 0},
                    }}>
                        {props.items.map((value, idx) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                            <CommentIcon />
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={value} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDialog}>Abbrechen</Button>
                    <Button onClick={closeDialog}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}