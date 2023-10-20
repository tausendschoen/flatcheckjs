
import * as React from "react";
import Zimmer, {
    Inventory_Abstellraum, Inventory_Balkon, Inventory_Gäste_WC, Inventory_Keller, Inventory_WC,
    Inventory_Zimmer
} from "./Zimmer";

export default function ZimmerListe(props) {


    return (
           <>
               <Zimmer name="Flur" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}/>
               <Zimmer name="Küche" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}/>
               <Zimmer name="Wohnzimmer" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}/>
               <Zimmer name="Balkon/ Loggia" sonstiges={3} inventory={Inventory_Balkon} open={props.open}/>
               <Zimmer name="Kinderzimmer I" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}/>
               <Zimmer name="Kinderzimmer II" sonstiges={3} inventory={Inventory_Zimmer} open={props.open}/>
               <Zimmer name="WC" sonstiges={3} inventory={Inventory_WC} open={props.open}/>
               <Zimmer name="Gäste-WC" sonstiges={3} inventory={Inventory_Gäste_WC} open={props.open}/>
               <Zimmer name="Abstellraum" sonstiges={3} inventory={Inventory_Abstellraum} open={props.open}/>
               <Zimmer name="Keller" sonstiges={3} inventory={Inventory_Keller}  open={props.open}/>
           </>
    );
}
