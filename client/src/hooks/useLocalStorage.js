import { useState } from "react";

export const useLocalStorage = (defaultValue) => {
    const [value, setValue] = useState(() => {
        const userData = localStorage.getItem('userData');
        if(userData && userData !== "{}"){
            return JSON.parse(userData);
        } else{
            return defaultValue;
        }
    });

    const setLocaStorageValue = (newValue) => {
        localStorage.setItem('userData', JSON.stringify(newValue));
        setValue(newValue);
    };

    return [
        value,
        setLocaStorageValue
    ];
}