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
                        Sie können das Dokument nicht direkt versenden. Sie müssen es Drucken und
                        dann über die Druckfunktion ihres Mobilgerätes "teilen". Das geht auf den
                        iPhone / iPad wie folgt:
                        <ol>
                            <li>Wählen Sie am Ende des Formulars den Knopf Drucken. Das Dokument wird dann vorbereitet und die EMail Adresse des Mieters
                            in die Zwischenablage kopiert</li>
                            <li>Im Drucken Dialog wählen Sie die Teilen Funktion (<IosShare/>)</li>
                            <li>Wählen Sie die EMail App aus</li>
                            <li>Kopieren Sie die EMail Adresse des Empfängers aus der Zwischenablage in das Empfänger Feld.</li>
                            <li>Und jetzt noch versenden ...</li>
                        </ol>
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