export const getLocalStorage = (target: string) => {
    const temp = localStorage.getItem(`${target}`);
    const store = temp ? JSON.parse(temp) : null;
    return store;
}