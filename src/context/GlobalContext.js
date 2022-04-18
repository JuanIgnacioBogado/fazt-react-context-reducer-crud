import { createContext, useContext, useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';

import appReducer from './AppReducer';

const context = createContext();

const initialState = {
    tasks: [
        { id: '1', title: 'title one', description: 'description', done: false },
        { id: '2', title: 'title two', description: 'description', done: false }
    ]
};

export const useTasks = () => useContext(context);

export default ({ children }) => {
    const [{tasks}, dispatch] = useReducer(appReducer, initialState);

    const addTask = task => dispatch({ type: 'ADD_TASK', payload: {...task, id: uuidv4()} });

    const deleteTask = id => dispatch({ type: 'DELETE_TASK', payload: id });

    const editTask = task => dispatch({ type: 'EDIT_TASK', payload: task });

    const done = id => dispatch({ type: 'DONE', payload: id });

    return (
        <context.Provider value={{
            tasks,
            addTask,
            deleteTask,
            editTask,
            done
        }}>
            {children}
        </context.Provider>
    )
};