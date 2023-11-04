import './App.css';
import * as React from "react";
import {useReducer, useRef, useState} from "react";
import ReactToPrint from 'react-to-print';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import ProtokollKopf from "./components/ProtokollKopf";
import Signature from "./components/Signature";
import Button from "@mui/material/Button";
import {Add, AddCircle, PrintOutlined} from "@mui/icons-material";
import {dataReducer, HeaderContext, headerContextData, HeaderDispatchContext} from "./components/HeaderContext";
import Zimmer, {
    Inventory_Abstellraum,
    Inventory_Balkon,
    Inventory_Gäste_WC,
    Inventory_Keller,
    Inventory_WC,
    Inventory_Zimmer
} from "./components/Zimmer";
import Paper from "@mui/material/Paper";


export function PrintApp() {

    const componentRef = useRef();

    const [headerData, dispatch] = useReducer(dataReducer, headerContextData);


    return (
        <div>
            <HeaderContext.Provider value={headerData}>
                <HeaderDispatchContext.Provider value={dispatch}>
                    <App ref={componentRef}/>
                    <ReactToPrint content={() => componentRef.current}
                                  trigger={() => {
                                      return <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                          <Button sx={{m: 2}} variant="contained" fullWidth={true}
                                                  startIcon={<PrintOutlined/>}>Drucken</Button>
                                      </div>;
                                  }}
                    />
                </HeaderDispatchContext.Provider>
            </HeaderContext.Provider>
        </div>
    );
}

function App(props) {
    const [zimmerListe, setZimmerListe] = useState([]);

    // TODO: Wenn die Liste durch löschen neue aufgebaut wird, dann muss der index neue
    // angepasst werden, oder das Element muss auf leer gesetzt werden und bei der
    // interation herausgenommen.

    if (zimmerListe.length === 0) {
        // initialisieren
        zimmerListe[0] = <Zimmer  name="Flur" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}
                                  idx={0} remove={() =>removeZimmer("0")}/>
        zimmerListe[1] = <Zimmer name="Küche" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}
                                 idx={1} remove={() =>removeZimmer("1")}/>
        zimmerListe[2] = <Zimmer name="Wohnzimmer" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}
                                 idx={2} remove={() =>removeZimmer("2")}/>
        zimmerListe[3] = <Zimmer name="Balkon/ Loggia" sonstiges={3} inventory={Inventory_Balkon} open={props.open}
                                 idx={3} remove={() =>removeZimmer("3")}/>
        zimmerListe[4] = <Zimmer name="Kinderzimmer I" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}
                                 idx={4}  remove={() =>removeZimmer("4") }/>
        zimmerListe[5] = <Zimmer name="Kinderzimmer II" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}
                                 idx={5} remove={() =>removeZimmer("5")}/>
        zimmerListe[6] = <Zimmer idx={6} name="WC" sonstiges={3} inventory={Inventory_WC} open={props.open}
                                 remove={() =>removeZimmer("6")}/>
        zimmerListe[7] = <Zimmer name="Gäste-WC" sonstiges={3} inventory={Inventory_Gäste_WC} open={props.open}
                                 idx={7} remove={() =>removeZimmer("7")}/>
        zimmerListe[8] = <Zimmer name="Abstellraum" sonstiges={3} inventory={Inventory_Abstellraum} open={props.open}
                                 idx={8} remove={() =>removeZimmer("8")}/>
        zimmerListe[9] = <Zimmer name="Keller" sonstiges={3} inventory={Inventory_Keller} open={props.open}
                                 idx={9} remove={() => removeZimmer("9")} />
    }

    function removeZimmer(index) {
        console.log("removeZimmer " + index);
        let tmpListe = [...zimmerListe];
        tmpListe[index] = null;
        setZimmerListe(tmpListe);
    }

    function addZimmer() {
        let tmpListe = [...zimmerListe];
        tmpListe[tmpListe.length] = <Zimmer name="XXX" sonstiges={3} inventory={Inventory_Keller} open={props.open}
                                            idx={`${zimmerListe.length}`} remove={() => removeZimmer(`${zimmerListe.length}`)} />
        setZimmerListe(tmpListe);
    }

    const zimmerComponents = zimmerListe.map((zimmer, index) => {
        if (zimmer) { // Check if the element is not empty (null or undefined)
            return zimmer;
        }
        return null; // Return null for empty elements
    });

    return (
        <div>
            <ButtonAppBar/>
            <ProtokollKopf/>
            <Schluessel/>
            {zimmerListe.map((element, index) => (
                element
            ))}
            <Paper sx={{
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: "100%",
                elevation: "2",
            }}>
                <Button startIcon={<AddCircle/>}
                    variant="contained" onClick={() => addZimmer()}>Neues Zimmer</Button>
            </Paper>
            <Signature/>
        </div>
    );

}

export default PrintApp;