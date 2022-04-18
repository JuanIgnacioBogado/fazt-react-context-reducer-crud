import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/GlobalContext';

const TaskForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addTask, tasks, editTask } = useTasks();
    const [task, setTask] = useState({
        title: '',
        description: '',
        done: false
    });

    const handleChange = ({ target }) => setTask({ ...task, [target.name]: target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            editTask(task);
        } else {
            addTask(task);
        }
        navigate('/');
    }

    useEffect(() => {
        if (id) {
            const findTask = tasks.find(task => task.id === id);
            if (!findTask) return navigate('/');
            setTask(findTask);
        }
    }, [id]);

    return (
        <div className="flex justify-center items-center h-3/4">
            <form
                className="bg-gray-900 p-10"
                onSubmit={handleSubmit}
            >
                <h2 className="mb-5 text-3xl">{id ? 'Edit Task' : 'Add Task'}</h2>

                <div className="mb-5">
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        placeholder="Write a Title"
                        className="py-3 px-4 focus:text-gray-100 bg-gray-700 outline-none w-full"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <textarea
                        name="description"
                        value={task.description}
                        rows="2"
                        placeholder="Write a Description"
                        className="py-3 px-4 focus:text-gray-100 bg-gray-700 outline-none w-full resize-none"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-500 py-2 px-4 w-full"
                >
                    {id ? 'Edit Task' : 'Create Task'}
                </button>
            </form>
        </div>
    )
}

export default TaskForm;