import * as React from "react";
import {useState} from "react";

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


// initialisiere Inventory
function createInventoryObjectList(InventoryListe) {
    let idx = 0;
    return InventoryListe.map(element => ({idx: idx++, label: element, value: 0}));
}


export const Inventory_Zimmer = createInventoryObjectList(["Tür", "Türzarge", "Wand", "Boden", "Fußleisten", "Decke", "Steckdosen", "Schalter", "Heizung",
    "Fenster"]);

export const Inventory_Gäste_WC = [...Inventory_Zimmer, ...createInventoryObjectList( ["WC-Sitz", "WC", "Spülkasten", "Waschbecken", "Wasserhahn", "Toilettenpapierhalter", "Spiegel"] ) ];

export const Inventory_WC = [...Inventory_Zimmer, ...createInventoryObjectList( ["Duschtrennwand", "Duschvorhang", "Badewanne", "Badewannenarmatur"])];

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


    console.log(`Inventory....` + JSON.stringify(Inventory));

/* wird ev. genutzt um zu prüfen ob alle Werte gesetzt sind
    function fillState() {
        let elements = Inventory.length;
        let count = 0;
        for( let item in Inventory ) {
            count += item.
        }
    }
    // <div style={{ marginRight: '10px' }}> <CircularProgressWithLabel value="0"/></div>
  */

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
                <Grid container spacing={1} paddingLeft={1}>
                    <Grid item xs={11}>
                        <Typography variant="h6">{props.name} (nicht relevant)</Typography>
                    </Grid>
                    <Grid item xs={1} spacing={"10px"}>
                        <IconButton color="primary" onClick={handleFoldComponent}><Visibility/></IconButton>
                    </Grid>
                </Grid>
            </Paper>
        )
    else
        return (
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
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                           <Typography variant="h6">{props.name}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton sx={{marginRight: '2'}} color="primary" onClick={handleFoldComponent}><VisibilityOff/></IconButton>
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
        );

}