import './App.css';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import Box from "@mui/material/Box";
import ProtokollKopf from "./components/ProtokollKopf";
import Signature from "./components/Signature";
import {Fragment} from "react";
import ZimmerListe from "./components/ZimmerListe";


function App() {
    return (
        <Fragment>
            <ButtonAppBar/>
            <Box sx={{p: 1}}>
                <ProtokollKopf/>
            </Box>
            <Box sx={{p: 1}}>
                <Schluessel/>
            </Box>
            <Box sx={{p: 1}}>
                <ZimmerListe/>
            </Box>
            <Box sx={{p: 1}}>
                <Signature/>
            </Box>

        </Fragment>

  );
}

export default App;
