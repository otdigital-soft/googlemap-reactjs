import { useState, useEffect } from "react";
import { IValue } from "utils/types";

function getStorageValue(key: string, defaultValue: any) {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : false;
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState<IValue>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
