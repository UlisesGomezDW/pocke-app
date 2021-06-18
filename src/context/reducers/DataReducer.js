export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"

export function DataReducer(state = {}, action = {}) {
    const { type = "", payload = null } = action

    const COLLECTION = {
        FETCH_DATA: { ...state, loading: true },
        FETCH_DATA_SUCCESS: { ...state, loading: false, success: true, data: payload },
        FETCH_DATA_ERROR: { ...state, loading: false, success: false, error: payload },
    }

    return COLLECTION[type] || state
}
