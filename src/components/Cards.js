import React, { useState } from 'react'
import '../App.css'
import Form from './Form'
import TaskList from './TaskList'

const Cards = ({ title, deleteCards }) => {
    const [task, setTasks] = useState([])
    const [showAdd, setShowAdd] = useState(false)

    //Add tasks
    const addTasks = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.floor(Math.random() * 100),
                tasks: userInput,
                completed: false
            }
            setTasks([...task, newItem])
        }
    }
    
    //Remove task
    const removeTask = (id) => {
        setTasks([...task.filter(todo => todo.id !== id)])
    }

    return (
        <div className='cards'>
            <div className='card'>
                <h1>{title}</h1>
                <div>
                    <button
                        className='btn_plus'
                        onClick={() => setShowAdd(!showAdd)}
                    >+</button>
                    <button className='btn_plus'
                        onClick={deleteCards}
                    >-</button>
                </div>
            </div>
            <div>
                {task.map(task => {
                    return (
                        <TaskList
                            key={task.id}
                            task={task}
                            removeTask={removeTask}
                        />
                    )
                })}
            </div>
            {showAdd && <Form onAdd={addTasks} />}
        </div>
    )
}

export default Cards
