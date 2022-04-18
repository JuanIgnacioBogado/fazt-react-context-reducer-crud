
export default (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            }

        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case 'EDIT_TASK':
            return {
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }

        case 'DONE':
            return {
                tasks: state.tasks.map(task => task.id === action.payload ? {...task, done: !task.done} : task)
            }

        default:
            return state;
    }
}