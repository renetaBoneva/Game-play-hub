import { useState } from "react";

export function useLocalStorage(initValues, key) {
    const [localStorageData, setLSData] = useState(() => {
        const lsData = localStorage.getItem(key);

        if (lsData) {
            const parsedData = JSON.parse(lsData);
            return parsedData;
        }

        return initValues;
    });

    function setLocalStorage(data) {
        setLSData(data);
        localStorage.setItem(key, JSON.stringify(data));
    }

    return [localStorageData, setLocalStorage];
}