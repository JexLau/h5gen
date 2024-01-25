import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // 获取任务列表
    const tasksDirectory = path.join(process.cwd(), './app/api/json');
    // 读取文件夹下的所有文件
    const files = fs.readdirSync(tasksDirectory);
    const tasks = files.map((file) => {
      const filePath = path.join(tasksDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    });

    return NextResponse.json({
      status: 200,
      data: tasks,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: 'taskId is required',
    });
  }

}

export async function POST(req: NextRequest) {
  // 创建或更新任务
  const taskId = req.body;
  const filePath = path.join(process.cwd(), 'tasks', `task${taskId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(taskId));
  return NextResponse.json({
    status: 200,
    data: taskId,
  });
}
