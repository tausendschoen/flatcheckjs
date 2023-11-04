import './App.css';
import * as React from "react";
import {useReducer, useRef} from "react";
import ReactToPrint from 'react-to-print';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import ProtokollKopf from "./components/ProtokollKopf";
import Signature from "./components/Signature";
import Button from "@mui/material/Button";
import {AddCircle, PrintOutlined} from "@mui/icons-material";
import {dataReducer, HeaderContext, headerContextData, HeaderDispatchContext} from "./components/HeaderContext";
import Zimmer, {Inventory_Keller, Inventory_Zimmer} from "./components/Zimmer";
import Paper from "@mui/material/Paper";
import {copyTextToClipboard} from "./components/helperFunctions";


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
                                                      if (headerData.mieterEmail) copyTextToClipboard(headerData.mieterEmail)
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
        };
    }

    removeZimmer = (index) => {
        console.log("removeZimmer " + index);
        const tmpListe = [...this.state.zimmerListe];
        tmpListe[index] = null;
        this.setState({zimmerListe: tmpListe});
    }

    addZimmer = () => {
        const tmpListe = [...this.state.zimmerListe];
        tmpListe.push(
            <Zimmer
                name="XXX"
                sonstiges={3}
                inventory={Inventory_Keller}
                open={this.props.open}
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
                        sonstiges={3}
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="0"
                        remove={() => this.removeZimmer("0")}
                    />,
                    <Zimmer
                        name="Küche"
                        sonstiges={3}
                        inventory={Inventory_Zimmer}
                        open={this.props.open}
                        idx="1"
                        remove={() => this.removeZimmer("1")}
                    />,
                    // ... Fügen Sie hier die übrigen Zimmer hinzu ...
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
                <ProtokollKopf/>
                <Schluessel/>
                {zimmerComponents}
                <Paper
                    sx={{
                        p: 1,
                        m: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: "100%",
                        elevation: "2",
                    }}
                >
                    <Button startIcon={<AddCircle/>} variant="contained" onClick={this.addZimmer}>
                        Neues Zimmer
                    </Button>
                </Paper>
                <Signature/>
            </div>
        );
    }
}


export default PrintApp;