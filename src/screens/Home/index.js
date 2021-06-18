import React, { useContext } from "react"
import { View, Image } from "react-native"
import Text, { BOLD, MEDIUM } from "../../components/common/Text"
import { MARGIN, HEIGHT_SCREEN, WIDTH_SCREEN, STATUS_BAR_HEIGHT } from "./../../constants/dimensions"
import { SEARCH_ROUTE, DETAIL_ROUTE } from "./../../constants/routes"
import { useNavigation } from "@react-navigation/native"
import { DataContext } from "./../../context/DataContext"
import Button, { TYPE_ICON } from "./../../components/common/Button"
import Screen from "../../components/layout/screen"
import Carousel from "../../components/common/Carousel"
import Background from "./../../assets/background"

function HomeScreen() {
    const navigation = useNavigation()
    const { state = {} } = useContext(DataContext)
    const { data = [] } = state

    function handleListener(index) {
        navigation.navigate(DETAIL_ROUTE, { param: data[index - 1] })
    }

    return (
        <Screen>
            <View style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}>
                <Background preserveAspectRatio="xMinYMax meet" height={100} />
            </View>
            <View style={{ width: "100%", height: "100%", position: "absolute", paddingTop: STATUS_BAR_HEIGHT }}>
                <View
                    style={{
                        width: "100%",
                        height: 40,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: MARGIN,
                        marginBottom: data.length > 0 ? 30 : 0,
                    }}
                >
                    <Text type={BOLD} style={{ fontSize: 22 }}>
                        PokeApp
                    </Text>
                    {data.length > 0 && (
                        <Button type={TYPE_ICON} icon="search" onPress={() => navigation.navigate(SEARCH_ROUTE)} />
                    )}
                </View>
                {data.length > 0 ? (
                    <View style={{ width: "100%", height: HEIGHT_SCREEN * 0.8, alignItems: "center" }}>
                        <Text type={MEDIUM} style={{ fontSize: 16, marginBottom: 20 }}>
                            ¡Mis pokemón!
                        </Text>

                        <Carousel data={data} onCardSelect={handleListener} />
                    </View>
                ) : (
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            flex: 1,
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            style={{
                                width: WIDTH_SCREEN - 160,
                                height: 200,
                                resizeMode: "contain",
                                marginBottom: 20,
                            }}
                            source={require("./../../assets/pokebola.png")}
                        />
                        <Text type={BOLD} style={{ fontSize: 18 }}>
                            Cargando...
                        </Text>
                    </View>
                )}
            </View>
        </Screen>
    )
}

export default HomeScreen
