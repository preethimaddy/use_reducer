export const initialState = {
    total:0,
    products: [],

}

const storeReducer = (state, action)=> {
    switch (action.type) {
        case "add":
            return {
                ...state,
                products: action.payload,
            }
            case "remove":
            return {
                ...state,
                products: action.payload,
            }
            case "update price":
                console.log(state.products); // Reference the current state instead
            return {
                ...state,
                total: action.payload,
            }
            default: 
                        throw new Error("cannot match case in reducer")
    }
}
export default storeReducer;