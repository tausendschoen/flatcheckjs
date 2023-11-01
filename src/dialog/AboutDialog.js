import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {AppVersion} from "../components/appVersion";

export default function AboutDialog(props) {

    return (
            <Dialog
                onClose={props.closeFunction}
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Über dieses Programm"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Das Formular ist aus dem Wunsch heraus entstanden ein digitales Formular für
                        die Wohnungsabnahme zu nutzen. Mit möglichst wenig Aufwand soll der Zustand
                        einer Immobilien Vorort rechtssicher dokumentiert werden.
                        <p/>
                        Das Formula ist für Mietwohnungen angepasst, kann aber einfach angepasst
                        werden. Feedback gerne unter michael.carell@web.de<p/>
                        Bitte die Versionnummer mit angeben, da ich häufig daran herumschraube.
                        <p/>
                        Version: {AppVersion}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeFunction} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
    );
}