import React from "react"
import { SafeAreaView, View } from "react-native"
import { CURRENT_PLATFORM, IOS } from "./../../constants/platform"
import { WHITE } from "./../../constants/colors"
import { STATUS_BAR_HEIGHT } from "./../../constants/dimensions"

export const CUSTOM_SCREEN = "custom"

const SCREEN_STYLE = {
    flex: 1,
    backgroundColor: WHITE,
}

function Screen(props) {
    const { children, style, type } = props

    if (type === CUSTOM_SCREEN) {
        return (
            <>
                <View style={[SCREEN_STYLE, { ...style }]}>{children}</View>
            </>
        )
    } else {
        return (
            <>
                {CURRENT_PLATFORM === IOS ? (
                    <SafeAreaView style={[SCREEN_STYLE, { ...style }]}>{children}</SafeAreaView>
                ) : (
                    <View style={[{ ...SCREEN_STYLE, paddingTop: STATUS_BAR_HEIGHT }, { ...style }]}>{children}</View>
                )}
            </>
        )
    }
}

Screen.defultProps = {
    children: null,
    style: {},
    type: "",
}

export default Screen
