import React from "react"
import { useSyncExternalStore } from "react"
import createStore from ".."

const themeModel = createStore('light')

const useTheme = () => {
    const theme = useSyncExternalStore(themeModel.subscribe, themeModel.getState)


    return React.useMemo(() => ({
        theme,
        controllers: {
            toggleTheme: () => themeModel.setState(theme === "light" ? "dark" : "light"),
        }
    }), [theme])
}

export default useTheme