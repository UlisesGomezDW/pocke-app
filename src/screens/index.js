import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { HOME_ROUTE, DETAIL_ROUTE, FAVORITES_ROUTE, SEARCH_ROUTE } from "./../constants/routes"

import Home from "./Home"
import Detail from "./Detail"
import Search from "./Search"
import Favorites from "./Favorites"

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
                        transitionSpec: {
                            open: { animation: "timing", config: { duration: 500 } },
                            close: { animation: "timing", config: { duration: 200 } },
                        },
                        cardStyleInterpolator: ({ current: { progress } }) => {
                            return {
                                cardStyle: {
                                    opacity: progress,
                                },
                            }
                        },
                        cardStyle: {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <Stack.Screen name={HOME_ROUTE} component={Home} />
                    <Stack.Screen name={DETAIL_ROUTE} component={Detail} initialParams={{ param: [] }} />
                    <Stack.Screen name={SEARCH_ROUTE} component={Search} />
                    <Stack.Screen name={FAVORITES_ROUTE} component={Favorites} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigator
