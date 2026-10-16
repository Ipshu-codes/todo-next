"use client";

type Task ={
    id:number;
    title:string;
    completed:boolean;
};

type TaskListProps ={
    tasks:Task[];
    onToggleTask:(id:number)=> void;
    onEditTask: (id:number)=> void;
    onDeleteTask: (id: number) => void;
};

export default function TaskList({
    tasks,
    onToggleTask,
    onEditTask,
    onDeleteTask,
}: TaskListProps) {
    return(
        <ul>
            {tasks.map((task)=> (
                <li key={task.id} className="task-item">
                    <input
                    type ="checkbox"
                    checked={task.completed}
                    onChange={()=> onToggleTask(task.id)}
                    />
                    <span
                    className="task"
                    style={{
                        textDecoration: task.completed ? "line-through": "none",
                    }}
                    >
                        {task.title}
                    </span>

                    <button className="edit-btn" onClick={()=> onEditTask(task.id)}>Edit</button>
                    <button className="delete-btn" onClick={()=> onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}