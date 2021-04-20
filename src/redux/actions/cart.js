export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA',
    payload: pizzaObj
})
export const clearCart = () => ({
    type: 'CLEAR_CART',
})
export const removeCartBlock = (id) => ({
    type: 'REMOVE_CART_BLOCK',
    payload: id
})

export const plusCartBlock = (id) => ({
    type: 'PLUS_CART_BLOCK',
    payload:id
})

export const minusCartBlock = (id) => ({
    type: 'MINUS_CART_BLOCK',
    payload:id
})


