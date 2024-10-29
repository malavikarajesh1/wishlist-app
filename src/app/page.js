"use client"
import AddTask from '@/module/AddTask';
import TaskList from '@/module/TaskList';
import { TasksProvider } from '@/module/TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1 className='font-bold text-[23px]'>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}