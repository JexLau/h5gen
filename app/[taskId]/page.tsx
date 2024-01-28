'use client';
import { useEffect, useState } from 'react';
import MainContent from '@/components/Main';
import { Task } from '../page';
import { AdDialog } from '@/components/Dialog';

export default function TaskPage(props: any) {
  const taskId = props.params.taskId;
  const [task, setTask] = useState<Task>({
    id: '',
    images: []
  });
  // 发送请求
  const getTask = async () => {
    const res = await fetch(`/api/task?taskId=${taskId}`,);
    const task = await res.json();
    setTask(task.data);
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <main>
      <AdDialog />
      <MainContent task={task} />
    </main>
  );
}
