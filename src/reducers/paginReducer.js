import { createAction, createReducer } from '@reduxjs/toolkit'


const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 4,
    totalCount: 0

};

const set_repos = createAction('SET_REPOS')
const set_is_fetching = createAction('SET_IS_FETCHING')
const set_current_page = createAction('SET_CURRENT_PAGE')

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(set_repos, (state, action) => {
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        })
        .addCase(set_is_fetching, (state, action) => {
            return {
                ...state,
                isFetching: action.payload
            }
        })
        .addCase(set_current_page, (state, action) => {
            return {
                ...state,
                currentPage: action.payload
            }
        })

})


