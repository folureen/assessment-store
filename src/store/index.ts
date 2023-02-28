const createStore = <T>(initialState: T) => {
    const store = {
        state: initialState,
        getState: () => {
            return store.state;
        },
        setState: <E extends T>(newValue: E) => {
            store.state = newValue;
            store.listeners.forEach((listener) => listener())
        },
        listeners: new Set<any>(),
        subscribe: (callback: any) => {
            store.listeners.add(callback);
            return () => store.listeners.delete(callback)
        }
    }

    return store;

}


export default createStore;