import logo from './logo.svg';
import './App.css';
import ButtonAppBar from "./components/AppBar";
import Schluessel from "./components/Schluessel";
import Box from "@mui/material/Box";
import ProtokollKopf from "./components/Bewertung";
import Signature from "./components/Signature";


function App() {
  return (
      <>
        <ButtonAppBar/>
        <Box sx={{p: 1}}>
          <ProtokollKopf/>
        </Box>
        <Box sx={{p: 1}}>
          <Schluessel/>
        </Box>
        <Box sx={{p: 1}}>
          <Signature/>
        </Box>
      </>

  );
}

export default App;
