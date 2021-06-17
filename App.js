import React from "react"
import AppProvider from "./src/context/AppContext"
import AppNavigator from "./src/screens"

function App() {
    return (
        <AppProvider>
            <AppNavigator />
        </AppProvider>
    )
}

export default App
