import React, { useState } from 'react'
import '../App.css';

const Form = ({ onAdd }) => {
    const [addTask, setTask] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        //Product text validation 
        if (!addTask) {
            alert('Please add text!!!')
            return
        }
        onAdd(addTask)
        setTask('')
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            submitForm(e)
        }
    }
    return (
        <div>
            <form
                style={{ marginTop: '20px' }}
                onSubmit={submitForm}
            >
                <input
                    className="input_tasks"
                    type="text"
                    placeholder="add text"
                    value={addTask}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <button className="btn_addTasks">add</button>
            </form>
        </div>
    )
}
export default Form;
