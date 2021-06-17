import React from "react"
import { TouchableOpacity, Image } from "react-native"
import Text, { BOLD } from "./../common/Text"

function Card(props) {
    const { onPress, image, title } = props
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "red",
                    borderRadius: 20,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={{ uri: image }}
                    style={{ width: "100%", height: "50%", resizeMode: "cover", marginBottom: 10 }}
                />
                <Text type={BOLD} style={{ textAlign: "center" }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

Card.defaultProps = {
    onPress: null,
    image: "",
    title: "",
}

export default Card
