import React from "react"
import { TextInput } from "react-native"
import { DARK, GRAY } from "./../../constants/colors"
import { REGULAR_FONT } from "./../../constants/fonts"
import { WIDTH_SCREEN } from "./../../constants/dimensions"

function Button(props) {
    const { style, value, onChange, placeholder } = props

    return (
        <>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                style={{
                    width: WIDTH_SCREEN - 40,
                    height: 40,
                    backgroundColor: GRAY,
                    paddingLeft: 15,
                    borderRadius: 20,
                    color: DARK,
                    fontFamily: REGULAR_FONT,
                    ...style,
                }}
            />
        </>
    )
}

Button.defaultProps = {
    value: "",
    placeholder: "",
    onChange: null,
    style: {},
}

export default Button
