const ADD = "PRODUCTS_ADD";
const DELETE = "DELETE_PRODUCT";

export const addProductAction = (title, price, discount) => {
    return{
        type: ADD,
        payload: {id: Date.now(), title, price, discount}
    }
}



export const deleteProductAction = (id) =>{
    return {
        type: DELETE, payload: id
    }
}

const productDefault = [
    {
        id: 1,
        title: "Ananas",
        price: 45,
        discount: 5
    },
    {
        id: 2,
        title: "Pineaple",
        price: 45,
        discount: 5
    },
    {
        id: 3,
        title: "Cherry",
        price: 95,
        discount: 7
    }
]


export const productReducer = (state = productDefault, action) => {
    if (action.type === ADD) {
        return [...state, action.payload]
    }else if (action.type === DELETE){
        return state.filter(({id}) => id !== action.payload)
    }
    
    return state
    
}