import React, { useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import { DataContext } from "./../../context/DataContext"
import Text, { BOLD } from "../../components/common/Text"
import Screen from "../../components/layout/screen"
import Header from "./../../components/common/Header"
import List from "./../../components/common/List"

function FavoritesScreen() {
    const navigation = useNavigation()
    const { state = {} } = useContext(DataContext)
    const { favorites = [] } = state

    function handleListener(index) {
        navigation.navigate(DETAIL_ROUTE, { param: favorites[index] })
    }

    return (
        <Screen>
            <Header style={{ justifyContent: "flex-start", marginBottom: 10 }}>
                <Text type={BOLD} style={{ fontSize: 20, marginLeft: 10 }}>
                    Favoritos
                </Text>
            </Header>
            {favorites.length > 0 && <List data={data} onItemSelect={handleListener} />}
        </Screen>
    )
}

export default FavoritesScreen
