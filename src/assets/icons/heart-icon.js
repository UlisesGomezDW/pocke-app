import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DARK } from "./../../constants/colors"

function HeartIcon(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                clipRule="evenodd"
                d="M2.922 12.446C1.849 9.096 3.104 4.931 6.62 3.8c1.85-.597 4.133-.099 5.43 1.69 1.223-1.855 3.572-2.283 5.42-1.69 3.516 1.132 4.778 5.297 3.706 8.647-1.67 5.31-7.497 8.076-9.126 8.076-1.628 0-7.403-2.704-9.13-8.076z"
                stroke={props.stroke ? props.stroke : DARK}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M15.789 7.564c1.207.124 1.961 1.081 1.917 2.422"
                stroke={props.stroke ? props.stroke : DARK}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

const MemoHeartIcon = React.memo(HeartIcon)
export default MemoHeartIcon
