import { useState } from "react";

export function useLocalStorage(key, initValues) {
    const [localStorageData, setLSData] = useState(() => {
        const lsData = localStorage.getItem(key);

        if (lsData) {
            const parsedData = JSON.parse(lsData);
            return parsedData;
        }

        localStorage.setItem(key, JSON.stringify(initValues));
        return initValues;
    });

    function setLocalStorage(data) {
        setLSData(data);
        localStorage.setItem(key, JSON.stringify(data));
    }

    function removeLocalStorageItem() {
        setLSData(initValues);
        localStorage.removeItem(key);
    }

    return [localStorageData, setLocalStorage, removeLocalStorageItem];
}