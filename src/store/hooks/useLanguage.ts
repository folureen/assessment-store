import React from "react";
import { useSyncExternalStore } from "react";
import createStore from "..";

const languageStore = createStore('RU')

const useLanguage = () => {

    const lang = useSyncExternalStore(languageStore.subscribe, languageStore.getState)

    return React.useMemo(() => ({
        lang,
        controllers: {
            toggleLanguage: () => languageStore.setState(lang === 'RU' ? 'ENG' : 'RU')
        }
    }), [lang])
}

export default useLanguage