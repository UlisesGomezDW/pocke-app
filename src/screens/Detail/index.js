import React, { useEffect, useState } from "react"
import { View, Image } from "react-native"
import Screen, { CUSTOM_SCREEN } from "../../components/layout/screen"
import { useNavigation, useIsFocused, useRoute } from "@react-navigation/native"
import { WHITE, RED } from "./../../constants/colors"
import { MARGIN, STATUS_BAR_HEIGHT } from "./../../constants/dimensions"
import { getRandomColor } from "./../../util/color"
import { translateText } from "./../../util/text"
import { StatusBar } from "expo-status-bar"
import { capitalizeText } from "./../../util/text"
import Text, { BOLD, MEDIUM } from "../../components/common/Text"
import Header from "./../../components/common/Header"

function DetailScreen() {
    const focused = useIsFocused()

    const navigation = useNavigation()
    const { params } = useRoute()
    const { name = "", stats = [], id = 0 } = params.param

    const [color, setColor] = useState(RED)

    useEffect(() => {
        navigation.addListener("focus", () => {
            const randomColor = getRandomColor()
            setColor(randomColor)
        })
    }, [navigation])

    return (
        <Screen type={CUSTOM_SCREEN} style={{ backgroundColor: color }}>
            {focused && <StatusBar style={"light"} />}
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: "tranparent",
                    paddingTop: STATUS_BAR_HEIGHT,
                }}
            >
                <Header backColor={WHITE} style={{ marginBottom: 20 }} />
                <Image
                    source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png` }}
                    style={{ height: "80%", width: "100%", resizeMode: "contain" }}
                />
            </View>
            <View
                style={{
                    flex: 0.5,
                    backgroundColor: WHITE,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    overflow: "hidden",
                    paddingTop: 20,
                    paddingHorizontal: MARGIN,
                }}
            >
                <Text type={BOLD} style={{ fontSize: 20, marginBottom: 20 }}>
                    {capitalizeText(name)}
                </Text>
                <View style={{ width: "100%" }}>
                    {stats.length > 0 &&
                        stats.map((item, index) => (
                            <View
                                style={{
                                    width: "100%",
                                    height: 30,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                                key={index}
                            >
                                <Text type={MEDIUM} style={{ fontSize: 16 }}>
                                    {translateText(item.stat.name)}:
                                </Text>
                                <Text type={BOLD} style={{ fontSize: 16 }}>
                                    {item.base_stat}%
                                </Text>
                            </View>
                        ))}
                </View>
            </View>
        </Screen>
    )
}

export default DetailScreen
