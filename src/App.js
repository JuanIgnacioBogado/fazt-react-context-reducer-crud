import {Routes, Route} from 'react-router-dom';

import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import GlobalContext from './context/GlobalContext';

import './App.css';

function App() {
    return (
        <div className="h-screen text-white text-center p-10">
            <div className="container mx-auto h-full">
                <GlobalContext>
                    <Heading />

                    <Routes>
                        <Route path="/" element={<TaskList/>} />
                        <Route path="/add" element={<TaskForm/>} />
                        <Route path="/edit/:id" element={<TaskForm/>} />
                    </Routes>
                </GlobalContext>
            </div>
        </div>
    );
}

export default App;
