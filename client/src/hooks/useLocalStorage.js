import { useState } from "react";

export const useLocalStorage = (defaultValue) => {
    const [value, setValue] = useState(() => {
        const userData = localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : defaultValue;
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