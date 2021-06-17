import React from "react"
import { View } from "react-native"
import SearchIcon from "./search-icon"
import HeartIcon from "./heart-icon"
import ArrowIcon from "./arrow-icon"

const COLLECTION = {
    search: SearchIcon,
    arrow: ArrowIcon,
    heart: HeartIcon,
}

function Icon(props) {
    const { name } = props

    const IconComponent = COLLECTION[name] || (() => <View />)

    return <IconComponent {...props} />
}

export default Icon
