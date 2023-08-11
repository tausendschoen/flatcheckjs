import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Bewertung from "./Bewertung";

export default function Zimmer() {
    return (
            <Card variant="outlined">
                <CardHeader
                    action={
                    <IconButton aria-label="Hinzufügen" >
                        <AddCircle fontSize={"large"} />
                    </IconButton>
                    }
                    title="Zimmer"
                    subheader="Fügen Sie Zimmer hinzu und bewerten das Inventar"
                />
                <CardContent>
                    <Bewertung/>
                </CardContent>
            </Card>
    );
}
