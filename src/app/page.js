"use client";
import AddTask from "@/components/AddTask.js";
import TaskList from "@/components/TaskList.js";
import { TasksProvider } from "@/components/TaskContext";

export default function TaskApp() {
  return (
    <div className='ml-3'>
    <TasksProvider>
      <h1 className="font-bold text-[30px] mb-3">Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </div>
  );
}
