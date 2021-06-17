import React from "react"
import { TouchableOpacity } from "react-native"
import Text, { BOLD } from "./../common/Text"
import { WHITE } from "./../../constants/colors"
import Icon from "./../../assets/icons"

export const TYPE_ICON = "type-icon"

function Button(props) {
    const { onPress, title, type, icon, style, iconProps } = props

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    width: 30,
                    height: 30,
                    backgroundColor: WHITE,
                    justifyContent: "center",
                    alignItems: "center",
                    ...style,
                }}
            >
                {type === TYPE_ICON ? (
                    <Icon name={icon} {...iconProps} />
                ) : (
                    <Text type={BOLD} style={{ textAlign: "center", color: WHITE }}>
                        {title}
                    </Text>
                )}
            </TouchableOpacity>
        </>
    )
}

Button.defaultProps = {
    onPress: null,
    title: "siii",
    type: "default",
    icon: "",
    style: {},
    iconProps: {},
}

export default Button
