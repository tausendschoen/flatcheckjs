import * as React from "react";
import {useEffect, useState} from "react";

import {FormControlLabel, FormGroup, InputAdornment, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Inventar from "./Inventar";
import {AddCircle, Camera, EditNote, Gradient, Visibility, VisibilityOff} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ImageGrid from "./ImageGrid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import WebcamDialog from "./WebcamDialog";


export const Inventar_Zimmer = ["Tür", "Türzarge", "Wand", "Boden", "Fußleisten", "Decke", "Steckdosen", "Schalter", "Heizung",
    "Fenster"];

export const Inventar_Gäste_WC = [...Inventar_Zimmer, "WC-Sitz", "WC", "Spülkasten", "Waschbecken", "Wasserhahn", "Toilettenpapierhalter", "Spiegel"];

export const Inventar_WC = [...Inventar_Gäste_WC, "Duschtrennwand", "Duschvorhang", "Badewanne", "Badewannenarmatur"];

export const Inventar_Balkon = ["Boden", "Decke", "Wände", "Glas", "Fenster", "Oberlicht"];

export const Inventar_Keller = ["Tür", "Boden", "Schalter", "Steckdose", "Fenster"];


/**
 *
 * @param props.inventarListe {[string]} Liste des Inventars in dem Zimmer
 *         Ein InventarElement hat die Attribute id, label, value
 * @return {JSX.Element}
 * @constructor
 */
export default function Zimmer(props) {

    const [inventar, setInventar] = React.useState([]);
    // Darstellung des InventarDialogs
    const [open, setOpen] = React.useState(true);
    const [showComment, setShowComment] = React.useState(false);
    const [showDialog, setShowDialog] = React.useState(false);
    const [images, setImages] = useState([]);


    let inventarListe = props.inventarListe;

    // initialisiere Inventar
    useEffect(() => {
            if (inventarListe.length > 0) {
                let tmpInventar = [];
                for (let i = 0; i < inventarListe.length; i++) {
                    tmpInventar = tmpInventar.concat({label: inventarListe[i], value: 0, id: i});
                }
                setInventar(tmpInventar);
            }
        }
        , []);

    function containsInventar(label) {
        console.log(`containsInventar ${label}`)
        let retValue = false;
        for (let i in inventarListe) {
            console.log(`compare ${i} ${inventarListe[i]}`);
            if (inventarListe[i] === label)
                retValue = true;
        }
        console.log(`containsInventar ${label} ${retValue}`)
        return retValue;
    }

    function addElement() {
        let tmpInventar = [...inventar];
        tmpInventar = tmpInventar.concat({id: tmpInventar.length, label: '', value: 0});
        setInventar(tmpInventar);
    }

    function setInventarValue(id, label, value) {
        console.log(`setInventarValue: ${id}, ${label}, ${value},`);
        let localList = [...inventar];
        localList[id] = {label: label, value: value};
        localList[id] = {label, value};
        setInventar(localList);
    }

    function handleFoldComponent() {
        // toggle state
        setOpen(!open);
        setShowDialog(false);
    }

    const handleCapture = (image) => {
        setImages((prevImages) => [...prevImages, image]);
    };

    const deleteImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    console.log(`Zimmer: ${props.name} Fold: ${open}  Camera Dialog: ${showDialog}`);

    if (open === false)
        return (
            <Paper sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>
                <Grid container spacing={1} paddingLeft={1}>
                    <Grid item xs={11}> <Typography variant="h6">{props.name} (nicht relevant)</Typography></Grid>
                    <Grid item xs={1}>
                        <IconButton color="primary" onClick={handleFoldComponent}><Visibility/></IconButton>
                    </Grid>
                </Grid>
            </Paper>

        )
    else
        return (
            <Paper sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>

                <Grid container spacing={1} paddingLeft={1} alignItems="center">
                    <Grid item xs={11}> <Typography variant="h6">{props.name}</Typography></Grid>
                    <Grid item xs={1}>
                        <IconButton color="primary" onClick={handleFoldComponent}><VisibilityOff/></IconButton>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField id="heizungszähler" label="Heizungszähler" required={true}
                                   variant="standard"
                                   fullWidth={true} type="text"
                                   InputLabelProps={{
                                       shrink: true,
                                   }}
                                   size="small"
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <Gradient/>
                                           </InputAdornment>
                                       ),
                                   }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormGroup><FormControlLabel control={<Switch/>}
                                                     label="Schlüssel"/></FormGroup>
                    </Grid>

                    <Grid item xs={12} md={12} >
                        {inventar.map((element, index) => {
                        return (
                        <Inventar id={index} label={element.label} set={setInventarValue}
                        checkFunction={containsInventar}/>
                        )
                    })
                        }
                    </Grid>
                </Grid>

                <Box sx={{m: 1}}>
                    <Button startIcon={<AddCircle/>} sx={{marginRight: 1}}
                            onClick={addElement}>
                        Inventar
                    </Button>
                    <Button startIcon={<EditNote/>} sx={{marginRight: 1}}
                            onClick={() => setShowComment(!showComment)}>
                        Hinweise
                    </Button>
                    <Button onClick={() => {
                        setShowDialog(true)
                    }}
                            startIcon={<Camera/>}
                    > Fotos </Button>
                </Box>
                <Box sx={{m: 1}}>
                    {showComment && (<TextField fullWidth multiline rows={3} label="Hinweistext"></TextField>)}
                </Box>

                {showDialog && (<WebcamDialog onClose={() => setShowDialog(false)} onCapture={handleCapture}/>)}
                {Boolean(images) && (<ImageGrid images={images} deleteFunction={deleteImage}/>)}

            </Paper>

        );

}