import { createAction, createReducer } from '@reduxjs/toolkit'


const initialState = [];

const apply_Token = createAction('APPLY_TOKEN')

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(apply_Token, (state, action) => {
            console.log("BIBA")
            state.push({
                type: 'APPLY_TOKEN',
                token: action.token
            })
            console.log("BOBA")
        })
})


