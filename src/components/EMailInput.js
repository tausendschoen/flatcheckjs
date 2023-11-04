import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { HeaderDispatchContext } from "./HeaderContext";
import {EmailOutlined} from "@mui/icons-material";

function EmailInput() {
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(true);

    const dispatch = useContext(HeaderDispatchContext);

    const validateEmail = (email) => {
        // RegEx-Muster zur Überprüfung einer gültigen E-Mail-Adresse
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        const isValid = validateEmail(newEmail);
        setEmail(newEmail);
        setValid(isValid);

        if (isValid) {
            dispatch({ action: "mieterEmail", value: newEmail });
        }
    }

    return (
        <div>
            <TextField
                label="E-Mail-Adresse Mieter"
                variant="standard"
                fullWidth
                value={email}
                size="small"
                onChange={handleEmailChange}
                error={!valid}
                helperText={!valid ? "Ungültige E-Mail-Adresse" : ""}
                InputProps={{
                    startAdornment: (
                        valid ? <EmailOutlined style={{ color: 'green' }} sx={{paddingRight: 1}} /> :
                            <EmailOutlined style={{ color: 'red' }} sx={{paddingRight: 1}}/>
                    ),
                }}
            />
        </div>
    );
}

export default EmailInput;
