
import * as React from "react";

export default function ZimmerListe(props) {

    return (
           <>
               {props.zimmer.map((element, index) => (
                   element
               ))}
           </>
    );
}
