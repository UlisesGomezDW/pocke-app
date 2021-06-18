import React, { createContext, useEffect, useReducer } from "react"
import { DataReducer } from "./reducers/DataReducer"
import { fetchData } from "./actions/DataAction"

const rootState = {
    success: false,
    loading: false,
    error: null,
    data: [],
}

export const DataContext = createContext()

const DataContextProvider = (props) => {
    const { children } = props

    const [state, dispatch] = useReducer(DataReducer, rootState)

    useEffect(() => {
        fetchData(dispatch)
    }, [])

    return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>
}

export default DataContextProvider
