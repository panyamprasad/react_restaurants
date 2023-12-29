export const setTableNumber = (value) => async dispatch => {
    dispatch ({
        type: "SET_TABLE_NUMBER",
        payload: value
    })
}

export const reSetTableNumber = () => async dispatch => {
    dispatch ({
        type: "RESET_TABLE_NUMBER"
    })
}

export const setFilter = (value) => async dispatch => {
    dispatch ({
        type: "SET_FILTER",
        payload: value
    })
}

export const reSetFilter = () => async dispatch => {
    dispatch ({
        type: "RESET_FILTER"
    })
}

export const addOrder = (id, name, prize, url, table_number) => async dispatch => {
    dispatch ({
        type: "ADD_ORDER",
        payload: {
            id: id,
            name: name,
            prize: prize,
            url: url,
            table_number: table_number
        }
    })
}