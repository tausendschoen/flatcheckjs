import './App.css';
import * as React from "react";
import {useRef, useState} from "react";
import ReactToPrint from 'react-to-print';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import Box from "@mui/material/Box";
import ProtokollKopf from "./components/ProtokollKopf";
import Signature from "./components/Signature";
import ZimmerListe from "./components/ZimmerListe";
import Button from "@mui/material/Button";
import {PrintOutlined} from "@mui/icons-material";


export function PrintApp() {

    const componentRef = useRef();

    return (
        <div>
            <App ref={componentRef} />

            <ReactToPrint content={() => componentRef.current }

                          trigger={() => {
                              return <Box sx={{p: 1}}> <Button variant="contained" fullWidth={true}
                                                               startIcon={<PrintOutlined/>}>Drucken</Button></Box>;
                          }}
            />

        </div>
    );
}

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        console.log("App open " + this.props.open);
    }

    render() {
        return (
            <div>
                <ButtonAppBar/>
                <ProtokollKopf/>
                <Schluessel/>
                <ZimmerListe open={this.props.open}/>
                <Signature/>
            </div>
        );
    }
}

export default App;