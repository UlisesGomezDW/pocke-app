import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DARK } from "./../../constants/colors"

function ArrowIcon(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M4.25 12.274h15M10.3 18.299s-6.05-3.261-6.05-6.023c0-2.764 6.05-6.026 6.05-6.026"
                stroke={props.stroke ? props.stroke : DARK}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

const MemoArrowIcon = React.memo(ArrowIcon)
export default MemoArrowIcon
