"use client";

import {useState} from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

type Task = {
  id:number;
  title:string;
  completed:boolean;
};

export default function Home() {
  const [tasks,setTasks] = useState< Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  function addTask(title:string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    console.log("Adding task:", title);
    setTasks([...tasks, newTask]);
  }

  function editTask(id: number){
    setEditingTaskId(id);
  }

  function updateTask(title: string){
    setTasks(
      tasks.map((task) =>
      task.id === editingTaskId ? {...task, title:title}:task
    )
  );
  setEditingTaskId(null);
  }
  function toggleTask(id: number) {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
}

function deleteTask(id: number) {
  setTasks(tasks.filter((task) => task.id !== id));

  if (editingTaskId === id) {
    setEditingTaskId(null);
  }
}
  const editingTask = tasks.find((task)=> task.id === editingTaskId);
return (
  <main>
    <h1>My To-Do App</h1>
    <TaskForm 
    onAddTask={addTask}
    onUpdateTask ={updateTask}
    editingTask ={editingTask}
    onCancelEdit={() => setEditingTaskId(null)}
    />
    <TaskList
    tasks={tasks}
    onToggleTask={toggleTask}
    onEditTask={editTask}
    onDeleteTask={deleteTask}
    />
  </main>
);
  
}
