import './App.css';
import * as React from "react";
import {useReducer, useRef} from "react";
import ReactToPrint from 'react-to-print';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import ProtokollKopf from "./components/ProtokollKopf";
import Signature from "./components/Signature";
import ZimmerListe from "./components/ZimmerListe";
import Button from "@mui/material/Button";
import {PrintOutlined} from "@mui/icons-material";
import {dataReducer, HeaderContext, headerContextData, HeaderDispatchContext} from "./components/HeaderContext";


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