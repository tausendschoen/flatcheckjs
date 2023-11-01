import React, {useContext} from "react";
import SignatureBox from "./SignatureBox";
import {HeaderContext} from "./HeaderContext";


export default function Signature() {

    const headerContextData = useContext(HeaderContext);

    return (

        <div className={"page-break"} style={{display: 'flex', alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center', margin: "10px"}}>

            <SignatureBox id={1} title={"Unterschrift Mieter " + headerContextData.mieter}/>
            <SignatureBox id={2} title={"Unterschrift Vermieter " + headerContextData.vermieter}/>

        </div>

    )
};