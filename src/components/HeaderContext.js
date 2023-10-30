import { createContext } from 'react';

export const HeaderContext = createContext(null);
export const HeaderDispatchContext = createContext(null);

export const headerContextData = {
    mieter : '',
    vermieter: ''
};

export const dispatchType = { action: "", value: "" };


export function dataReducer(headerContext, dispatch) {
    if( dispatch.action === "mieter")
        return {...headerContext, mieter: dispatch.value };
    else
        return {...headerContext, vermieter: dispatch.value };
}