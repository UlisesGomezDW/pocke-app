import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MARGIN } from "./../../constants/dimensions"
import { DARK } from "../../constants/colors"
import Button, { TYPE_ICON } from "./../common/Button"

function Header(props) {
    const { children, style, backColor } = props

    const navigation = useNavigation()

    return (
        <>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: MARGIN,
                    ...style,
                }}
            >
                <Button
                    style={{ backgroundColor: "transparent" }}
                    type={TYPE_ICON}
                    icon="arrow"
                    onPress={() => navigation.goBack()}
                    iconProps={{
                        stroke: backColor,
                    }}
                />
                {children}
            </View>
        </>
    )
}

Header.defaultProps = {
    children: null,
    style: {},
    backColor: DARK,
}

export default Header
