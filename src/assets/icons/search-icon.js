import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DARK } from "./../../constants/colors"

function SearchIcon(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                clipRule="evenodd"
                d="M10.275 1.714a8.561 8.561 0 110 17.122 8.561 8.561 0 010-17.122zM18.899 17.488a1.411 1.411 0 11-.001 2.822 1.411 1.411 0 010-2.822z"
                stroke={props.stroke ? props.stroke : DARK}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

const MemoSearchIcon = React.memo(SearchIcon)
export default MemoSearchIcon
