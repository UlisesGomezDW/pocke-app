import { Dimensions } from "react-native"
import Constants from "expo-constants"

const { width, height } = Dimensions.get("window")

export const HEIGHT_SCREEN = height
export const WIDTH_SCREEN = width
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight
export const MARGIN = 20
