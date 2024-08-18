import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items : []
    },

    reducers: {
        addItem: (state, action) => {

            // Vanilla(Older) Redux => Don't Mutate State and returning was mendatory
            // const newState = [...state]
            // newState.items.push(action.payload);
            // return newState

            // we have to mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // creating the copy and pasting the empty array in that
            // state.items = [];   not mutating the state return copy of empty state
            return {items : []};      // will replace origina; state empty
        } 
    }
})
 

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;