import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { HOME_ROUTE, DETAIL_ROUTE, SEARCH_ROUTE } from "./../constants/routes"
import { transition } from "./../navigation/config"

import Home from "./Home"
import Detail from "./Detail"
import Search from "./Search"

const Stack = createStackNavigator()

function AppNavigator() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                    initialRouteName={HOME_ROUTE}
                    screenOptions={{
                        gestureEnabled: false,
                        swipeEnabled: false,
                        ...transition,
                    }}
                >
                    <Stack.Screen name={HOME_ROUTE} component={Home} />
                    <Stack.Screen name={DETAIL_ROUTE} component={Detail} initialParams={{ param: {} }} />
                    <Stack.Screen name={SEARCH_ROUTE} component={Search} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator
