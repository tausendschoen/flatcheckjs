import * as React from "react";
import {useState} from "react";

import {FormControlLabel, FormGroup, InputAdornment, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Inventar from "./Inventar";
import {AddCircle, Camera, Delete, EditNote, Gradient} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ImageGrid from "./ImageGrid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import WebcamDialog from "./WebcamDialog";
import Dialog from "@mui/material/Dialog";
import {Transition} from "react-transition-group";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import AboutDialog from "../dialog/AboutDialog";


// initialisiere Inventory
function createInventoryObjectList(InventoryListe) {
    let idx = 0;
    return InventoryListe.map(element => ({idx: idx++, label: element, value: 0}));
}


export const Inventory_Zimmer = createInventoryObjectList(["Tür", "Türzarge", "Wand", "Boden", "Fußleisten", "Decke", "Steckdosen", "Schalter", "Heizung",
    "Fenster"]);

export const Inventory_Gäste_WC = [...Inventory_Zimmer, ...createInventoryObjectList(["WC-Sitz", "WC", "Spülkasten", "Waschbecken", "Wasserhahn", "Toilettenpapierhalter", "Spiegel"])];

export const Inventory_WC = [...Inventory_Zimmer, ...createInventoryObjectList(["Duschtrennwand", "Duschvorhang", "Badewanne", "Badewannenarmatur"])];

export const Inventory_Balkon = createInventoryObjectList(["Boden", "Decke", "Wände", "Glas", "Fenster", "Oberlicht"]);

export const Inventory_Keller = createInventoryObjectList(["Tür", "Boden", "Schalter", "Steckdose", "Fenster"]);

export const Inventory_Abstellraum = createInventoryObjectList(["Tür", "Türzarge", "Boden", "Fußleisten", "Decke", "Schalter", "Steckdose"]);


/**
 *
 * @param props.InventoryListe {[string]} Liste des Inventorys in dem Zimmer
 *         Ein InventoryElement hat die Attribute id, label, value
 * @return {JSX.Element}
 * @constructor
 */
export default function Zimmer(props) {

    const [Inventory, setInventory] = React.useState(props.inventory);
    // Darstellung des InventoryDialogs
    const [open, setOpen] = React.useState(true);
    const [showComment, setShowComment] = React.useState(false);
    const [showDialog, setShowDialog] = React.useState(false);
    const [images, setImages] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

    console.log(`Inventory....` + JSON.stringify(Inventory));

    function showDeleteRoomDialog() {
        console.log("ShowDeleteRoomDialog");
        setShowDeleteDialog(true);
    }

    function callBackDeleteDialog(index, result) {
        setShowDeleteDialog(false);
        if (result === true)
            props.remove();
    }


    function containsInventory(label) {
        console.log(`containsInventory ${label}`)
        let retValue = false;
        for (let i in Inventory) {
            console.log(`compare ${i} ${Inventory[i].label}`);
            if (Inventory[i].label === label)
                retValue = true;
        }
        console.log(`containsInventory ${label} ${retValue}`)
        return retValue;
    }

    function addInventory() {
        let tmpInventory = [...Inventory];
        tmpInventory = tmpInventory.concat({id: tmpInventory.length, label: '', value: 0});
        setInventory(tmpInventory);
    }

    function removeInventory(idx) {
        let tmpInventory = [...Inventory];
        tmpInventory.splice(idx, 1);
        console.log(`removeInventory: ${Inventory[idx].label} Neue Liste: ` + JSON.stringify(tmpInventory));

        setInventory(tmpInventory);
    }


    function setInventoryValue(id, label, value) {
        console.log(`setInventoryValue: ${id}, ${label}, ${value},`);
        let localList = [...Inventory];
        localList[id] = {label: label, value: value};
        setInventory(localList);
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

    return (
        <>{showDeleteDialog && ( <AlertDialogSlide label={props.name} callBack={callBackDeleteDialog} /> ) }
        <Paper
            className={"page-break"}
            sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>

            <Grid container spacing={1} paddingLeft={1} alignItems="center">
                <Grid item xs={11}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <TextField id="zimmername" label="Zimmer"
                                   defaultValue={props.name}
                                   required={true}
                                   fullWidth={true} type="text"
                                   variant="standard"
                        />
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <IconButton sx={{marginRight: '2'}}  onClick={showDeleteRoomDialog}><Delete/></IconButton>
                </Grid>
                <Grid item xs={8} md={6}>
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
                <Grid item xs={4} md={6}>
                    <FormGroup><FormControlLabel control={<Switch/>}
                                                 label="Schlüssel"/></FormGroup>
                </Grid>
                <Grid item xs={12} sx={{p: 0, m: 0}}>
                    {Inventory.map((element) => {
                        return (<Inventar key={element.idx} idx={element.idx} label={element.label}
                                          set={setInventoryValue}
                                          removeFnc={removeInventory} checkFunction={containsInventory}/>)
                    })
                    }
                </Grid>
            </Grid>

            <Box sx={{m: 1}}>
                <Button startIcon={<AddCircle/>} sx={{marginRight: 1}}
                        onClick={addInventory}>
                    Inventar
                </Button>
                <Button startIcon={<EditNote/>} sx={{marginRight: 1}}
                        onClick={() => setShowComment(!showComment)}>
                    Hinweise
                </Button>
                <Button onClick={() => {
                    setShowDialog(true)
                }}
                        startIcon={<Camera/>}> Fotos </Button>
            </Box>
            <Box sx={{m: 1}}>
                {showComment && (<TextField fullWidth multiline rows={3} label="Hinweistext"></TextField>)}
            </Box>

            {showDialog && (<WebcamDialog onClose={() => setShowDialog(false)} onCapture={handleCapture}/>)}
            {Boolean(images) && (<ImageGrid title={props.name} images={images} deleteFunction={deleteImage}/>)}

        </Paper>
        </>
    );

}

function AlertDialogSlide(props) {

    return (
        <React.Fragment>
            <Dialog
                open={true}
                keepMounted
                onClose={() => props.callBack(props.index ,false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Löschen eines Zimmers?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Möchten Sie das Zimmer {props.label} mit allen Daten löschen?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} onClick={() => props.callBack(props.index ,false)}>Nein</Button>
                    <Button variant={"contained"} color={"error"} onClick={() => props.callBack(props.index, true)}>Ja</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}