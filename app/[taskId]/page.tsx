'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import backgroundImage from '@/images/background-auth.jpg'

interface Task {
  id: string,
  images: Array<{
    link: string,
    name: string,
    pic?: string,
  }>
}
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

  const generateContent = () => {
    return task.images.map((item, index) => {
      return (
        <Link href={item.link} key={item.name + index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 10px 10px 0' }}>
          <div style={{ width: '100px', height: '100px', position: 'relative' }}>
            <Image src={item.pic || backgroundImage} layout="fill" objectFit="cover" alt={item.name} />
          </div>
          <div>{item.name}</div>
        </Link>

      )
    })
  }

  return (
    <main>
      <div style={{ display: 'flex' }}>
        {generateContent()}
      </div>
    </main>
  );
}