import React from "react"
import { Text } from "react-native"
import { BOLD_FONT, REGULAR_FONT, MEDIUM_FONT } from "./../../constants/fonts"
import { DARK } from "./../../constants/colors"

export const BOLD = "bold"
export const REGULAR = "regular"
export const MEDIUM = "medium"

const FONT_TYPES = {
    bold: BOLD_FONT,
    regular: REGULAR_FONT,
    medium: MEDIUM_FONT,
}

function TextComponent(props) {
    const { children, style, type, numberOfLines } = props
    return (
        <>
            <Text
                numberOfLines={numberOfLines}
                style={{ fontFamily: FONT_TYPES[type] || REGULAR_FONT, fontSize: 12, color: DARK, ...style }}
            >
                {children}
            </Text>
        </>
    )
}

TextComponent.defaultProps = {
    children: "",
    style: {},
    type: REGULAR,
    numberOfLines: 1,
}

export default TextComponent
