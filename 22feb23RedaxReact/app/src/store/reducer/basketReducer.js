const BASKET_ADD = "BASKET_ADD";
const INC = "BASKET_INC";
const DEC = "BASKET_DEC";
const BASKET_REMOVE_PRODUCT = "BASKET_REMOVE_PRODUCT";

export const addBasketAction = (id) => {
    return {type: BASKET_ADD, payload: id}
}

export const incBasketAction = (id) => {
    return {type: INC, payload: id}
}

export const decBasketAction = (id) => {
    return {type: DEC, payload: id}
}

export const removeBasketAction = (id) => {
    return {type: BASKET_REMOVE_PRODUCT, payload: id}
}



const getById = (state, find_id) => state.find(({id}) => id === find_id);

export const basketReducer = (state = [], action) => {
    if (action.type === BASKET_ADD) {
        const target =  getById(state, action.payload);
        
        if (target === undefined) {
            return [...state, {id: action.payload, count: 1}]
        }else{
            target.count++;
            return [...state]
        }
        
    } else if (action.type === INC) {
        const target = getById(state, action.payload);
        target.count++
        return [...state]
    } else if (action.type === DEC) {
        const target = getById(state, action.payload);
        target.count--;

        if (target.count === 0) {
            state = state.filter(item => item !== target)
        }

        return [...state]
    }else if (action.type === BASKET_REMOVE_PRODUCT) {
        return state.filter(item=>item.id !== action.payload)
        
    }
    return state 
    
}