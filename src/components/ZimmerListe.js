
import * as React from "react";
import Zimmer, {Inventar_Balkon, Inventar_Gäste_WC, Inventar_Keller, Inventar_WC, Inventar_Zimmer} from "./Zimmer";

export default function ZimmerListe(props) {


    return (
           <>
               <Zimmer name="Flur" sonstiges={3} inventarListe={Inventar_Zimmer} open={props.open}/>
               <Zimmer name="Küche" sonstiges={3} inventarListe={Inventar_Zimmer} open={props.open}/>
               <Zimmer name="Wohnzimmer" sonstiges={3} inventarListe={Inventar_Zimmer} open={props.open}/>
               <Zimmer name="Balkon/ Loggia" sonstiges={3} inventarListe={Inventar_Balkon} open={props.open}/>
               <Zimmer name="Kinderzimmer I" sonstiges={3} inventarListe={Inventar_Zimmer} open={props.open}/>
               <Zimmer name="Kinderzimmer II" sonstiges={3} inventarListe={Inventar_Zimmer} open={props.open}/>
               <Zimmer name="WC" sonstiges={3} inventarListe={Inventar_WC} open={props.open}/>
               <Zimmer name="Gäste-WC" sonstiges={3} inventarListe={Inventar_Gäste_WC} open={props.open}/>
               <Zimmer name="Abstellraum" sonstiges={3} inventarListe={Inventar_Gäste_WC} open={props.open}/>
               <Zimmer name="Keller" sonstiges={3} inventarListe={Inventar_Keller}  open={props.open}/>

           </>
    );
}
