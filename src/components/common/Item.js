import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { GRAY, WHITE, BLUE, RED } from "./../../constants/colors"
import { MARGIN, WIDTH_SCREEN } from "./../../constants/dimensions"
import { capitalizeText } from "./../../util/text"
import Text, { MEDIUM } from "./../common/Text"

function Item(props) {
    const { onPress, title, image, description, style } = props

    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                style={{
                    width: WIDTH_SCREEN - 40,
                    height: 60,
                    backgroundColor: WHITE,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingRight: MARGIN,
                    borderColor: GRAY,
                    borderStyle: "solid",
                    borderBottomWidth: 1,
                    ...style,
                }}
            >
                {image ? (
                    <Image
                        source={{
                            uri: image,
                        }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: RED + "B3",
                            resizeMode: "cover",
                        }}
                    />
                ) : (
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: GRAY }} />
                )}
                <View style={{ marginLeft: 10 }}>
                    <Text type={MEDIUM} style={{ fontSize: 16, marginBottom: 2 }}>
                        {capitalizeText(title)}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{description}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

Item.defaultProps = {
    onPress: null,
    title: "",
    image: null,
    description: "",
    style: {},
}

export default Item
