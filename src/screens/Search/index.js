import React, { useState, useContext, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { MARGIN, WIDTH_SCREEN } from "./../../constants/dimensions"
import { DETAIL_ROUTE } from "./../../constants/routes"
import { DataContext } from "./../../context/DataContext"
import Screen from "../../components/layout/screen"
import Input from "./../../components/common/Input"
import Header from "./../../components/common/Header"
import List from "./../../components/common/List"

function SearchScreen() {
    const navigation = useNavigation()
    const { state = {} } = useContext(DataContext)
    const { data = [] } = state

    const [search, setSearch] = useState("")
    const [picker, setPicker] = useState([])

    function handleListener(id) {
        const param = data.filter((item) => item.id === id)[0]

        navigation.navigate(DETAIL_ROUTE, { param })
    }

    useEffect(() => {
        handleSearch()
    }, [search])

    function handleSearch() {
        if (search.length > 0) {
            const filter = data.filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
            setPicker(filter)
        } else {
            setPicker([])
        }
    }

    return (
        <Screen>
            <Header style={{ paddingBottom: 20 }}>
                <Input
                    value={search}
                    placeholder="Busca"
                    onChange={(text) => setSearch(text)}
                    style={{ width: WIDTH_SCREEN - (MARGIN * 2 + 40) }}
                />
            </Header>
            {picker.length > 0 && <List data={picker} onItemSelect={handleListener} />}
        </Screen>
    )
}

export default SearchScreen
