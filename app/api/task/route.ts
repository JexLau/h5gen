// pages/api/task.js
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const taskId = searchParams.get('taskId');
  console.log('GET', taskId)

  // 获取任务列表
  const tasksDirectory = path.join(process.cwd(), './app/api/json');
  if (taskId) {
    const filePath = path.join(tasksDirectory, `${taskId}.json`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const task = JSON.parse(fileContents);
      console.log('GET', task);
      return NextResponse.json({
        status: 200,
        data: task,
      });
    } else {
      return NextResponse.json({
        status: 404,
        error: 'Task not found',
      });
    }
  } else {
    return NextResponse.json({
      status: 500,
      error: 'taskId is required',
    });
  }
}

export async function POST(req: NextRequest) {
  const { taskId, json = {} } = await req.json();
  console.log('POST', taskId, json)
  // 创建或更新任务
  const tasksDirectory = path.join(process.cwd(), './app/api/json');
  const filePath = path.join(tasksDirectory, `${taskId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(json));
  return NextResponse.json({
    status: 200,
    data: taskId,
  });
}
