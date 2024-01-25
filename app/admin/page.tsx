'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import backgroundImage from '@/images/background-auth.jpg'
import { Fragment } from 'react'
import clsx from "clsx";
import Modal from 'react-modal';

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

export default function AdminPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newTaskData, setNewTaskData] = useState<Task>({
    id: '', images: [{
      link: '',
      name: '',
      pic: '/images/1.jpg',
      id: 1,
    }, {
      link: '',
      name: '',
      pic: '/images/1.jpg',
      id: 2,
    }, {
      link: '',
      name: '',
      pic: '/images/1.jpg',
      id: 3,
    },]
  });
  const [editFormData, setEditFormData] = useState<TaskImage>({ name: '', link: '', pic: '', id: 0 });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNewTaskChange = (event: any, index: number) => {
    const { name, value } = event.target;

    if (name === "task") {
      // 如果是任务 ID 的更改
      setNewTaskData({ ...newTaskData, id: value });
    } else if (name === "name" || name === "link") {
      // 如果是任务项的名称或链接的更改
      const updatedImages = newTaskData.images.map((item, idx) => {
        if (idx === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      setNewTaskData({ ...newTaskData, images: updatedImages });
    }
  };


  const handleSubmit = async (event: any) => {
    // 防止表单的默认提交行为
    event.preventDefault();
    console.log(newTaskData);

    const response = await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify({ taskId: newTaskData.id, json: newTaskData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.status === 200) {
      // const task = await response.json();
      // setTasks([...tasks, task]);
      closeModal();
      getTaskList()
    } else {
      // 处理错误
      console.error('Failed to create new task');
    }
  };

  const handleEditClick = (task: Task, image: TaskImage) => {
    setEditingId(`${task.id}-${image.id}`);
    setEditFormData({ name: image.name, link: image.link, pic: image.pic, id: image.id });
  };

  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFormSubmit = async (taskId: string) => {
    const { name, link, pic, id } = editFormData;
    const task = tasks.find((task) => task.id === taskId);
    if (!task) return;
    const image = task.images.find((img) => img.id === id);
    if (!image) return;
    image.link = link;
    image.pic = pic;
    image.name = name;

    const response = await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify({ taskId, json: task }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      // 更新任务列表状态
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId
            ? { ...task, images: task.images.map((img) => (img.name === editFormData.name ? { ...img, ...editFormData } : img)) }
            : task
        )
      );
      setEditingId(null); // 退出编辑模式
    } else {
      // 处理错误
      console.error('Update failed');
    }
  };

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
              onClick={openModal}
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
                          key={tItem.id}
                          className={clsx(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {editingId === `${item.id}-${tItem.id}` ? (
                              <input
                                type="text"
                                name="name"
                                value={editFormData.name}
                                onChange={handleEditFormChange}
                              />
                            ) : (
                              tItem.name
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {editingId === `${item.id}-${tItem.id}` ? (
                              <input
                                type="text"
                                name="link"
                                value={editFormData.link}
                                onChange={handleEditFormChange}
                              />
                            ) : (
                              tItem.link
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div style={{ padding: '10px', width: '50px', height: '50px', position: 'relative' }}>
                              <Image src={tItem.pic || backgroundImage} layout="fill" objectFit="cover" alt={tItem.name} />
                            </div>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            {editingId === `${item.id}-${tItem.id}` ? (
                              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleEditFormSubmit(item.id)}>提交</button>
                            ) : (
                              <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleEditClick(item, tItem)}>编辑</button>
                            )}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="新建任务"
      >
        <h2>新建任务</h2>
        <form >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="task" className="block text-sm font-medium leading-6 text-gray-900">
                    任务ID
                  </label>
                  <div className="mt-2">
                    <input type="text" name="task" id="task" autoComplete="task"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={newTaskData.id}
                      onChange={(event) => handleNewTaskChange(event, -1)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {newTaskData.images.map((item, index) => {
                  return (<div className="sm:col-span-4" key={item.id}>
                    <label htmlFor="item" className="block text-sm font-medium leading-6 text-gray-900">
                      {`任务项${item.id}`}
                    </label>
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                          名称
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={item.name}
                            onChange={(event) => handleNewTaskChange(event, index)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                          链接
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="link"
                            id="link"
                            value={item.link}
                            onChange={(event) => handleNewTaskChange(event, index)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>)
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeModal}>
              取消
            </button>
            <button onClick={handleSubmit}
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              生成任务
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}
