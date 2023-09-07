
import * as React from "react";
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Zimmer, {Inventar_Balkon, Inventar_Gäste_WC, Inventar_Keller, Inventar_WC, Inventar_Zimmer} from "./Zimmer";
import Inventar from "./Inventar";

export default function ZimmerListe() {
    return (
           <>
               <Zimmer name="Flur" sonstiges={3} inventarListe={Inventar_Zimmer} />
               <Zimmer name="Küche" sonstiges={3} inventarListe={Inventar_Zimmer} />
               <Zimmer name="Wohnzimmer" sonstiges={3} inventarListe={Inventar_Zimmer} />
               <Zimmer name="Balkon/ Loggia" sonstiges={3} inventarListe={Inventar_Balkon} />
               <Zimmer name="Kinderzimmer I" sonstiges={3} inventarListe={Inventar_Zimmer} />
               <Zimmer name="Kinderzimmer II" sonstiges={3} inventarListe={Inventar_Zimmer} />
               <Zimmer name="WC" sonstiges={3} inventarListe={Inventar_WC} />
               <Zimmer name="Gäste-WC" sonstiges={3} inventarListe={Inventar_Gäste_WC} />
               <Zimmer name="Abstellraum" sonstiges={3} inventarListe={Inventar_Gäste_WC} />
               <Zimmer name="Keller" sonstiges={3} inventarListe={Inventar_Keller}  />

           </>
    );
}
