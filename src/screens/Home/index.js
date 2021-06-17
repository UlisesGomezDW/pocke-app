import React from "react"
import { View } from "react-native"
import Text, { BOLD, MEDIUM } from "../../components/common/Text"
import { MARGIN, HEIGHT_SCREEN } from "./../../constants/dimensions"
import { SEARCH_ROUTE, FAVORITES_ROUTE } from "./../../constants/routes"
import { useNavigation } from "@react-navigation/native"
import Button, { TYPE_ICON } from "./../../components/common/Button"
import Screen from "../../components/layout/screen"
import Carousel from "../../components/common/Carousel"
import FloatButton from "../../components/hocs/FloatButton"

const DATA = [
    { key: "0", title: "ulises", poster: "https://m.media-amazon.com/images/I/71C+8hy5ODL._SS500_.jpg" },
    { key: "1", title: "ulises", poster: "https://m.media-amazon.com/images/I/71C+8hy5ODL._SS500_.jpg" },
    { key: "2", title: "ulises", poster: "https://m.media-amazon.com/images/I/71C+8hy5ODL._SS500_.jpg" },
]

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <Screen>
            <View
                style={{
                    width: "100%",
                    height: 40,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: MARGIN,
                    marginBottom: 30,
                }}
            >
                <Text type={BOLD} style={{ fontSize: 22 }}>
                    PokeApp
                </Text>
                <Button type={TYPE_ICON} icon="search" onPress={() => navigation.navigate(SEARCH_ROUTE)} />
            </View>
            <View style={{ width: "100%", height: HEIGHT_SCREEN * 0.7, alignItems: "center" }}>
                <Text type={MEDIUM} style={{ fontSize: 16, marginBottom: 20 }}>
                    ¡Los mejores pokemón!
                </Text>
                <Carousel data={DATA} />
            </View>
            <FloatButton
                style={{ bottom: MARGIN, right: MARGIN }}
                onPress={() => navigation.navigate(FAVORITES_ROUTE)}
            />
        </Screen>
    )
}

export default HomeScreen
