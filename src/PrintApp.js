import './App.css';
import * as React from "react";
import {useReducer, useRef} from "react";
import ReactToPrint from 'react-to-print';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import Signature from "./components/Signature";
import Button from "@mui/material/Button";
import {AddCircle, EditNote, PrintOutlined} from "@mui/icons-material";
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
import {copyTextToClipboard} from "./components/helperFunctions";
import Wohnungsdaten from "./components/Wohnungsdaten";
import MieterDaten from "./components/MieterDaten";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export function PrintApp() {

    const componentRef = useRef();

    const [headerData, dispatch] = useReducer(dataReducer, headerContextData);


    return (
        <div>

            <HeaderDispatchContext.Provider value={dispatch}>
                <HeaderContext.Provider value={headerData}>
                    <App ref={componentRef}/>
                    <ReactToPrint content={() => componentRef.current}
                                  trigger={() => {

                                      return <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                          <Button sx={{m: 2}} variant="contained" fullWidth={true}
                                                  onClick={() => {
                                                      if (headerData.mieterEmail !== null && headerData.mieterEmail !== undefined)
                                                          copyTextToClipboard(headerData.mieterEmail)
                                                  }}
                                                  startIcon={<PrintOutlined/>}>Drucken</Button>
                                      </div>;
                                  }}
                    />
                </HeaderContext.Provider>
            </HeaderDispatchContext.Provider>

        </div>
    );
}

class App extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            zimmerListe: [],
            showComment: false,
            bemerkung: '',
            open: false
        }
    }

    setBemerkung = (value) => {
        this.setState({...this.state, bemerkung: value});
    }

    removeZimmer = (index) => {
        console.log("removeZimmer " + index);
        const tmpListe = [...this.state.zimmerListe];
        tmpListe[index] = null;
        this.setState({...this.state, zimmerListe: tmpListe});
    }

    setShowComment = (value) => {
        this.setState( {...this.state, showComment: value});
    }

    addZimmer = () => {
        const tmpListe = [...this.state.zimmerListe];
        tmpListe.push(
            <Zimmer
                name="XXX"
                sonstiges={3}
                inventory={Inventory_Keller}
                open={this.state.open}
                idx={tmpListe.length.toString()}
                remove={() => this.removeZimmer(tmpListe.length.toString())}
            />
        );
        this.setState({zimmerListe: tmpListe});
    }

    componentDidMount() {
        if (this.state.zimmerListe.length === 0) {
            this.setState((prevState) => ({
                zimmerListe: [
                    <Zimmer
                        name="Flur"
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="0"
                        remove={() => this.removeZimmer("0")}
                    />,
                    <Zimmer
                        name="Küche"
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="1"
                        remove={() => this.removeZimmer("1")}
                    />,
                    <Zimmer
                        name="Wohnzimmer"
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="2"
                        remove={() => this.removeZimmer("2")}
                    />,
                    <Zimmer
                        name="Schlafzimmer"
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="3"
                        remove={() => this.removeZimmer("3")}
                    />,
                    <Zimmer
                        name="1. Kinderzimmer"
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="4"
                        remove={() => this.removeZimmer("4")}
                    />,
                    <Zimmer
                        name="2. Kinderzimmer"
                        inventory={Inventory_Zimmer}
                        open={this.state.open}
                        idx="5"
                        remove={() => this.removeZimmer("5")}
                    />,
                    <Zimmer
                        name="Bad"
                        inventory={Inventory_WC}
                        open={this.state.open}
                        idx="6"
                        remove={() => this.removeZimmer("6")}
                    />,
                    <Zimmer
                        name="Gäste WC"
                        inventory={Inventory_Gäste_WC}
                        open={this.state.open}
                        idx="7"
                        remove={() => this.removeZimmer("7")}
                    />,
                    <Zimmer
                        name="Balkon / Loggia"
                        inventory={Inventory_Balkon}
                        open={this.state.open}
                        idx="8"
                        remove={() => this.removeZimmer("8")}
                    />,
                    <Zimmer
                        name="Abstellraum"
                        inventory={Inventory_Abstellraum}
                        open={this.state.open}
                        idx="9"
                        remove={() => this.removeZimmer("9")}
                    />,
                    <Zimmer
                        name="Keller"
                        inventory={Inventory_Keller}
                        open={this.state.open}
                        idx="10"
                        remove={() => this.removeZimmer("10")}
                    />,
                ],
            }));
        }
    }

    render() {
        const zimmerComponents = this.state.zimmerListe.map((zimmer, index) => {
            if (zimmer) {
                return zimmer;
            }
            return null;
        });

        return (
            <div>
                <ButtonAppBar/>
                <Wohnungsdaten/>
                <MieterDaten/>
                <Schluessel/>
                {zimmerComponents}
                <Box sx={{m: 1, p: 1}}>
                    <Button sx={{ marginLeft: 1 }} startIcon={<EditNote/>} variant="text" onClick={() => this.setShowComment(!this.state.showComment)}>
                        Abschlussbemerkung
                    </Button>
                    <Button startIcon={<AddCircle/>} variant="contained" onClick={this.addZimmer}>
                        Neues Zimmer
                    </Button>
                </Box>
                {this.state.showComment && (
                <Box sx={{m: 1, p: 1}}>
                    <TextField
                        value={this.state.bemerkung}
                        onChange={(e) => this.setBemerkung(e.target.value)}
                        fullWidth multiline rows={3} label="Abschlussbemerkungen"></TextField>
                </Box>)}
                <Signature/>
            </div>
        );
    }
}


export default PrintApp;