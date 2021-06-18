import { TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack"

export const transition = {
    gestureDirection: "horizontal",
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [1, 0.9],
                              })
                            : 1,
                    },
                ],
            },
        }
    },
}
