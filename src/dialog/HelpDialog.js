import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IosShare, Share} from "@mui/icons-material";

export default function HelpDialog(props) {

    return (
            <Dialog
                onClose={props.closeFunction}
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Hilfe"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <bold>Drucken</bold><p/>
                        Um das Dokument per EMail zu versenden, wähle "Drucken" am Ende des Formulars. Dann wird
                        ein PDF erstellt das du einfach über EMail, WhatsApp, ... versenden kannst. Das geht so:
                        <ol>
                            <li>Wählen am Ende des Formulars <em>Drucken</em>. Das Dokument wird vorbereitet und die
                                EMail Adresse des Mieters in die Zwischenablage kopiert.</li>
                            <li>Im Drucken Dialog wähle (<IosShare/>) <em>Teilen</em>.</li>
                            <li>Wähle deine EMail App aus.</li>
                            <li>Klicke ins Empfänger Feld und wähle "Einfügen". Die Email Adresse des Mieters wird
                            in das Feld kopiert.</li>
                        </ol>
                        Jetzt kannst du das Protokoll direkt es versenden versenden.
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