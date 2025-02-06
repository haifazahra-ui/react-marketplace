import { api } from "../utils";
const init = {
    load: true,
    data: [],
    error: null
}
export const fetchUser = () => {
    return async (dispatch) => {
        dispatch({
            type: 'USER_INIT'
        });
        api.get("/users")
            .then(response => {
                let data = response?.data
                dispatch({
                    type: 'USER_SUCCESS',
                    payload: {
                        data: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: 'USER_FAIL',
                    payload: {
                        error: err
                    }
                })
            })
    }
}
export const userReducer = (state = init, action) => {
    switch (action.type) {
        case 'USER_INIT':
            return init
        case 'USER_SUCCESS':
            return {
                ...state,
                load: false,
                data: action?.payload?.data
            }
        case 'USER_FAIL':
            return {
                load: false,
                data: [],
                error: action?.payload?.error
            }
        default:
            return state
    }
}