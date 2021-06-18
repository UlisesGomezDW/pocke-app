import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { RED } from "./../constants/colors"

function Background(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
            <Path
                fill={RED}
                d="M0 64l48 26.7C96 117 192 171 288 181.3c96 10.7 192-21.3 288-48 96-26.3 192-48.3 288-48 96-.3 192 21.7 288 37.4 96 16.3 192 26.3 240 32l48 5.3v160H0z"
            />
        </Svg>
    )
}

const MemoBackground = React.memo(Background)
export default MemoBackground
