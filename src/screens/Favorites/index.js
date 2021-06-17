import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MARGIN } from "./../../constants/dimensions"
import Text, { BOLD } from "../../components/common/Text"
import Screen from "../../components/layout/screen"
import Header from "./../../components/common/Header"

function FavoritesScreen() {
    const navigation = useNavigation()

    return (
        <Screen>
            <Header style={{ justifyContent: "flex-start" }}>
                <Text type={BOLD} style={{ fontSize: 20, marginLeft: 10 }}>
                    Favoritos
                </Text>
            </Header>
        </Screen>
    )
}

export default FavoritesScreen
