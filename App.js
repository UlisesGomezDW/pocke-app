import React from "react"
import AppProvider from "./src/context/AppContext"
import DataProvider from "./src/context/DataContext"
import AppNavigator from "./src/screens"

function App() {
    return (
        <AppProvider>
            <DataProvider>
                <AppNavigator />
            </DataProvider>
        </AppProvider>
    )
}

export default App
