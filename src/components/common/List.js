import React from "react"
import { FlatList } from "react-native"
import Item from "./Item"

function List(props) {
    const { data, onItemSelect } = props

    function handlePress(id = 0) {
        if (onItemSelect && typeof onItemSelect === "function") onItemSelect(id)
    }

    return (
        <>
            {data.length > 0 && (
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({ id }) => `${id}`}
                    contentContainerStyle={{ alignItems: "center" }}
                    renderItem={({ item, index }) => (
                        <Item
                            image={item.sprites.front_default ? item.sprites.front_default : null}
                            title={item.name}
                            description={item.base_experience + " de experencia"}
                            key={index}
                            onPress={() => handlePress(item.id)}
                        />
                    )}
                />
            )}
        </>
    )
}

List.defaultProps = {
    data: [],
    onItemSelect: null,
}

export default List
