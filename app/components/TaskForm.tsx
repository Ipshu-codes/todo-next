"use client";

import {useState, useEffect} from "react";

type TaskFormProps ={
    onAddTask:(titl:string) => void;
    onUpdateTask:(titile:string) => void;
    editingTask:{id:number; title:string;completed:boolean}|undefined;
    onCancelEdit: () => void;
}

export default function TaskForm({
    onAddTask,
    onUpdateTask,
    editingTask,
    onCancelEdit,
    }: TaskFormProps) {
    const [task,setTask] = useState("");

    useEffect(()=>{
        setTask(editingTask ? editingTask.title:"");
    },[editingTask]);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!task.trim()) return;
        if(editingTask){
            onUpdateTask(task);
        } else {
            onAddTask(task);
        }
        
        setTask("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            />
            <button type ="submit">
                {editingTask ? "Update Task" : "Add"}
                </button>

                {editingTask && (
                    <button type="button" onClick={onCancelEdit}>
                        Cancel
                    </button>
                )}
        </form>
    );
}