import { TInitialState } from "../store/types";

export const getLocalStorage = (target: string) => {
    const temp = localStorage.getItem(`${target}`);
    const store = temp ? JSON.parse(temp) : {} as TInitialState;
    return store;
}