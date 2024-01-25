'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import backgroundImage from '@/images/background-auth.jpg'
import { Fragment } from 'react'
import clsx from "clsx";
interface Task {
  id: string,
  images: Array<{
    link: string,
    name: string,
    pic?: string,
  }>
}

export default function AdminPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTaskList = async () => {
    const res = await fetch(`/api/tasks`,);
    const tasks = await res.json();
    setTasks(tasks.data);
  }

  useEffect(() => {
    getTaskList();
  }, []);

  const handleDelete = (taskId: string) => {
    fetch('/api/deleteTask', {
      method: 'DELETE',
      body: JSON.stringify({ taskId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleEdit = (taskId: string) => {
    // Redirect to the edit page or open an edit form
  };

  const handleAddNewTask = () => {
    // Redirect to the add new task page or open a form to add a task
  };

  return (
    <main style={{ padding: '20px' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-4xl font-semibold leading-6 text-gray-900">
              Admin Dashboard
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleAddNewTask}
            >
              添加任务
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                      任务
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      链接
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      图片
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tasks.map((item) => (
                    <Fragment key={item.id}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          {item.id}
                        </th>
                      </tr>
                      {item.images.map((tItem, personIdx) => (
                        <tr
                          key={tItem.name}
                          className={clsx(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {tItem.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{tItem.link}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div style={{ padding: '10px', width: '100px', height: '100px', position: 'relative' }}>
                              <Image src={tItem.pic || backgroundImage} layout="fill" objectFit="cover" alt={tItem.name} />
                            </div>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              编辑
                            </a>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px' }}>{task.id}</td>
                <td style={{ padding: '8px' }}>
                  <button onClick={() => handleEdit(task.id)} style={{ marginRight: '8px' }}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            )
            return task.images.map((item, index) => {
              return (
                <tr key={task.id + index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '8px' }}>{item.name}</td>
                  <td style={{ padding: '8px', width: '100px', height: '100px', position: 'relative' }}>
                    <Image src={item.pic || backgroundImage} layout="fill" objectFit="cover" alt={item.name} />
                  </td>
                  <td style={{ padding: '8px' }}>
                    <button onClick={() => handleEdit(task.id)} style={{ marginRight: '8px' }}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          })}
        </tbody>
      </table> */}
    </main>
  );
}
