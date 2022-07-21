
const initState = [
        {id: 1, name: 'Learn Yoga', priority: 'Medium', completed: false,},
        {id: 2, name: 'Learn Redux', priority: 'High', completed: true},
        {id: 3, name: 'Learn JavaScript', priority: 'Low', completed: false},
    ]
const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                    ...state,
                     action.payload
                ]
        case 'todoList/toggleTodoCompleted':
            return state.map(todo => todo.id === action.id? {...todo, completed: !todo.completed}: todo)
        default:
            return state
    }
}

export default todoListReducer