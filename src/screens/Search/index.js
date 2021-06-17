import React, { useState } from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MARGIN, WIDTH_SCREEN } from "./../../constants/dimensions"
import Screen from "../../components/layout/screen"
import Input from "./../../components/common/Input"
import Header from "./../../components/common/Header"

function SearchScreen() {
    const navigation = useNavigation()

    const [search, setSearch] = useState("")

    return (
        <Screen>
            <Header>
                <Input
                    value={search}
                    placeholder="Busca"
                    onChange={(text) => setSearch(text)}
                    style={{ width: WIDTH_SCREEN - (MARGIN * 2 + 40) }}
                />
            </Header>
        </Screen>
    )
}

export default SearchScreen
