
import * as React from "react";
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Zimmer from "./Zimmer";

export default function ZimmerListe() {
    return (
            <Card variant="outlined">
                <CardHeader
                    action={
                    <IconButton aria-label="Hinzufügen" >
                        <AddCircle fontSize={"large"} />
                    </IconButton>
                    }
                    title="Zimmer"
                    subheader="Fügen Sie ZimmerListe hinzu und bewerten das Inventar"
                />
                <CardContent>
                    <Zimmer/>
                </CardContent>
            </Card>
    );
}
