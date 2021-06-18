import { getPokemonData } from "../../services/pokemon.services"
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../reducers/DataReducer"

export async function fetchData(dispatch = () => null) {
    dispatch({ type: FETCH_DATA })
    try {
        const data = await getPokemonData()
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: data,
        })
    } catch (e) {
        dispatch({ type: FETCH_DATA_ERROR, payload: e })
    }
}
