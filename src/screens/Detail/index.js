import React from "react"
import { View, Text, Button } from "react-native"
import Screen, { CUSTOM_SCREEN } from "../../components/layout/screen"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import { WHITE, RED } from "./../../constants/colors"
import { STATUS_BAR_HEIGHT } from "./../../constants/dimensions"
import { StatusBar } from "expo-status-bar"
import Header from "./../../components/common/Header"

function DetailScreen() {
    const navigation = useNavigation()
    const focused = useIsFocused()

    return (
        <Screen type={CUSTOM_SCREEN} style={{ backgroundColor: RED }}>
            {focused && <StatusBar style={"light"} />}
            <View style={{ flex: 0.5, backgroundColor: "tranparent", paddingTop: STATUS_BAR_HEIGHT }}>
                <Header backColor={WHITE} />
            </View>
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: WHITE,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    overflow: "hidden",
                    paddingTop: 20,
                    paddingHorizontal: 20,
                }}
            >
                <Text style={{ fontFamily: "MontserratBold" }}>Detalle</Text>
                <Button title="back" onPress={() => navigation.goBack()} />
            </View>
        </Screen>
    )
}

export default DetailScreen
