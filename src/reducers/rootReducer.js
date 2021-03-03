import { createAction, createReducer } from '@reduxjs/toolkit'



const initialState = {
    type: '',
    token: ''

};

const apply_Token = createAction('APPLY_TOKEN')

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(apply_Token, (state, action) => {
            state.push({
                type: 'APPLY_TOKEN',
                token: action
            })

        })
})

