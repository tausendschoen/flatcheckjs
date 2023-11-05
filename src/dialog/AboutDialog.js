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
                        Um Streit bei der Wohnungsabnahme zu reduzieren, muss der Zustand der Immobilie
                        bei Übergabe genau dokumentiert werden. Das erfordert Zeit, Konzentration u. Organisation.
                        Mit dieser WW-Formular-App kannst du dass zeitsparend, intuitiv und einfach machen. Die
                        Funktionen:
                        <ol>
                            <li>Vorkonfigurierte Zimmer inkl. Inventar</li>
                            <li>Hinzufügen/ Löschen von Inventar</li>
                            <li>Hinzufügen/ Löschen von Zimmern</li>
                            <li>Fotodokumentation</li>
                            <li>Digitale Unterschrift</li>
                            <li>Datenvalidierungen bei der Eingabe</li>
                            <li>Einheitliche Zustandserfassung</li>
                            <li>Druck u. Versand (über Mobiltelefon)</li>
                            <li>Datenschutzkonform (alle Daten nur lokal)</li>
                            <li>Offline fähig</li>
                        </ol>
                        Ich übernehme keine Gewährleistung für die korrekte Funktion des Formulars und
                        kann auch nicht garantieren, das es auf allen Endgeräten und mit allen Browsern
                        funktioniert. <br/>
                        Bei Verbesserungsvorschlägen u. Anmerkungen bitte die Versionsnummer, das Endgerät
                        und den Browser mit angeben. Screen-Shots wären auch toll. Dann kann Fehler
                        schneller reproduzieren.
                        <p/>
                        Version: {AppVersion}
                        <p/>
                        <a href="https://www.buymeacoffee.com/mcarell" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: "60px", width: "217px"}} /></a>
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