import React from 'react'
import '../App.css'

const TaskList = ({ task, toggleTask, removeTask }) => {
    return (
        <div key={task.id} className='task_list'>
            <div
                className={task.completed ? "task_text strike" : "task_text"}
                onClick={() => toggleTask(task.id)}
            >
                {task.tasks}
            </div>
            <div
                onClick={() => removeTask(task.id)}
                className="task_delete"
            >
               &#10006;
            </div>
        </div>
    )
}
export default TaskList
