import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(projectId: string, title: string) {
    return this.prisma.task.create({
      data: {
        title,
        projectId,
      },
    });
  }

  getTasks(projectId: string) {
    return this.prisma.task.findMany({
      where: { projectId },
    });
  }

  toggleTask(taskId: string, completed: boolean) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: { completed },
    });
  }

  deleteTask(taskId: string) {
    return this.prisma.task.delete({
      where: { id: taskId },
    });
  }
}
