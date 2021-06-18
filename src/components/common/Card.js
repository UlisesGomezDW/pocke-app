import React from "react"
import { TouchableOpacity, Image } from "react-native"
import Text, { BOLD } from "./../common/Text"
import { RED } from "./../../constants/colors"
import { uppercaseText } from "./../../util/text"

function Card(props) {
    const { onPress, image, title, description } = props
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    width: "100%",
                    height: "85%",
                    backgroundColor: RED + "80",
                    borderRadius: 20,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {image ? (
                    <Image source={{ uri: image }} style={{ width: "100%", height: "50%", resizeMode: "contain" }} />
                ) : (
                    <Image
                        source={require("./../../assets/pokebola.png")}
                        style={{ width: "100%", height: "50%", resizeMode: "cover" }}
                    />
                )}
                <Text type={BOLD} style={{ textAlign: "center", marginVertical: 20, fontSize: 16 }}>
                    {uppercaseText(title)}
                </Text>
                <Text type={BOLD} style={{ textAlign: "center", fontSize: 16, color: RED }}>
                    {description + " EXP"}
                </Text>
            </TouchableOpacity>
        </>
    )
}

Card.defaultProps = {
    onPress: null,
    image: null,
    title: "",
    description: "",
}

export default Card
