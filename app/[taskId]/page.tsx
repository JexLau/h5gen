'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import backgroundImage from '@/images/background-auth.jpg'

interface Task {
  id: string,
  images: {
    a1: string,
    a2: string,
    a3: string,
  }
}
export default function TaskPage(props: any) {
  const taskId = props.params.taskId;
  const [task, setTask] = useState<Task>({
    id: '',
    images: {
      a1: '',
      a2: '',
      a3: '',
    }
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
    <div>
      {task && (
        <>
          <h1>{task?.id}</h1>
          <Link href={task.images.a1}>
            <Image src={backgroundImage} width={500} height={500} alt="Image a1" />
          </Link>
          <Link href={task.images.a2}>
            <Image src={backgroundImage}  width={500} height={500}  alt="Image a2" />
          </Link>
          <Link href={task.images.a3}>
            <Image src={backgroundImage}  width={500} height={500}  alt="Image a2" />
          </Link>
        </>
      )}
    </div>
  );
}
