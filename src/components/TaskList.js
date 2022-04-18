import React from 'react';
import { Link } from 'react-router-dom';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { useTasks } from '../context/GlobalContext';

const TaskList = () => {
    const { tasks, deleteTask, done } = useTasks();

    return (
        <div className="flex justify-center">
            <div className="w-6/12">
                {tasks.map(task => (
                    <div key={task.id} className="bg-gray-900 px-20 py-5 shadow-2xl mb-4 flex justify-between">
                        <div>
                            <h1 className={task.done ? 'line-through' : ''}>{task.title}</h1>
                            <p>{task.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                to={`/edit/${task.id}`}
                                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded"
                            >
                                Edit
                            </Link>
                            <button
                                className="bg-red-600 hover:bg-red-500 py-2 px-4 rounded"
                                onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => done(task.id)}
                                className="bg-purple-600 hover:bg-purple-500 p-2 flex items-center gap-2 rounded"
                            >
                                {task.done ?
                                    <><ImCheckboxChecked/> Undone</>
                                    : 
                                    <><ImCheckboxUnchecked/> Done</>
                                }
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskList;