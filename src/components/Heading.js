import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

const Heading = () => {
    return (
        <div className="flex items-center justify-between mb-10">
            <Link to="/">
                <h5 className="text-gray-100 font-bold text-2xl">Task App</h5>
            </Link>
            <Link
                to="/add"
                className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded inline-flex items-center font-bold"
            >
                <IoMdAdd /> Add Task
            </Link>
        </div>
    )
}

export default Heading;