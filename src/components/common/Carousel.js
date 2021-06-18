import React, { useRef } from "react"
import { View, Animated } from "react-native"
import { WIDTH_SCREEN } from "./../../constants/dimensions"
import Card from "./../common/Card"

const SPACING = 10
const ITEM_SIZE = WIDTH_SCREEN * 0.72
const EMPTY_ITEM_SIZE = (WIDTH_SCREEN - ITEM_SIZE) / 2

function Carrousel(props) {
    const { data, onCardSelect } = props
    const scrollX = useRef(new Animated.Value(0)).current

    function handlePress(index = 0) {
        if (onCardSelect && typeof onCardSelect === "function") onCardSelect(index)
    }

    return (
        <>
            {data.length > 0 && (
                <Animated.FlatList
                    showsHorizontalScrollIndicator={false}
                    data={[{ key: "empty-left" }, ...data, { key: "empty-right" }]}
                    keyExtractor={({ id }) => `${id}`}
                    horizontal
                    bounces={false}
                    decelerationRate={0.2}
                    snapToInterval={ITEM_SIZE}
                    snapToAlignment="start"
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: true,
                    })}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        if (!item.id) {
                            return <View style={{ width: EMPTY_ITEM_SIZE }} />
                        }

                        const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE]

                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [100, 50, 100],
                        })

                        return (
                            <View style={{ width: ITEM_SIZE }}>
                                <Animated.View
                                    style={{
                                        marginHorizontal: SPACING,
                                        transform: [{ translateY }],
                                    }}
                                >
                                    <Card
                                        onPress={() => handlePress(index)}
                                        image={item.sprites.front_default ? item.sprites.front_default : null}
                                        title={item.name}
                                        description={item.base_experience}
                                    />
                                </Animated.View>
                            </View>
                        )
                    }}
                />
            )}
        </>
    )
}

Carrousel.defaultProps = {
    data: [],
    onCardSelect: null,
}

export default Carrousel
