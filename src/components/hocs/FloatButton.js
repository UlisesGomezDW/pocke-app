import React from "react"
import Button, { TYPE_ICON } from "./../common/Button"
import { RED, WHITE } from "./../../constants/colors"

function FloatButton(props) {
    const { onPress, icon, style } = props
    return (
        <Button
            type={TYPE_ICON}
            onPress={onPress}
            icon={icon}
            iconProps={{
                stroke: WHITE,
            }}
            style={{ position: "absolute", height: 50, width: 50, borderRadius: 25, backgroundColor: RED, ...style }}
        />
    )
}

FloatButton.defaultProps = {
    onPress: null,
    icon: "heart",
    style: {},
}

export default FloatButton
