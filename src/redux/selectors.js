import {createSelector} from '@reduxjs/toolkit'

// export const todoListSelector  = (state) => {
//     const searchText = searchTextSelector(state)
//     const todoRemaining = state.todoList.filter(e => {
//         return e.name.includes(searchText)
//     })
//     return todoRemaining
// }
export const searchTextSelector = (state) => state.filter.search
export const statusSelector = (state) => state.filter.status
export const todoListSelector = (state) => state.todoList;
export const proritySelector = (state) => state.filter.priority;
// reselect
export const todoRemainingSelector = createSelector(todoListSelector, searchTextSelector, statusSelector, proritySelector, (todoList, searchText, filterStatus, priorities) => {

    return todoList.filter(e => {
        if (filterStatus === 'All') 
            return priorities.length?e.name.includes(searchText) && priorities.includes(e.priority) :e.name.includes(searchText) ;
         else 
            return e.name.includes(searchText) 
            && (filterStatus == 'Completed' ? e.completed : !e.completed) 
            && (priorities.length?priorities.includes(e.priority):true)
        
    })
})
