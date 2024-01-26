'use client';
import { useEffect, useState } from 'react';
import MainContent from '@/components/Main';

export interface TaskImage {
  link: string,
  name: string,
  pic: string,
  id: number,
}
export interface Task {
  id: string,
  images: Array<TaskImage>
}
export default function DefaulPage() {
  const [task, setTask] = useState<Task>({
    id: '',
    images: []
  });
  // 发送请求
  const getTask = async () => {
    const res = await fetch(`/api/task?taskId=${'task1'}`,);
    const task = await res.json();
    setTask(task.data);
  }

  useEffect(() => {
    getTask();
  }, []);
  return (
    <main>
      <MainContent task={task} />
    </main>
  );
}
