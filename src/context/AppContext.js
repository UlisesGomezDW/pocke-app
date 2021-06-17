import React, { createContext, useEffect, useReducer } from "react"
import { View } from "react-native"
import { useFonts } from "expo-font"

const rootState = {
    success: false,
    loading: false,
    error: null,
    data: [],
    favorites: [],
}

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const { children } = props

    const [loading] = useFonts({
        MontserratBold: require("./../../assets/fonts/Montserrat-Bold.ttf"),
        MontserratMedium: require("./../../assets/fonts/Montserrat-Medium.ttf"),
        MontserratRegular: require("./../../assets/fonts/Montserrat-Regular.ttf"),
    })
    //const [state, dispatch] = useReducer(policyReducer, rootState) value={{ state, dispatch }}

    return <AppContext.Provider>{!loading ? <View /> : children}</AppContext.Provider>
}

export default AppContextProvider
