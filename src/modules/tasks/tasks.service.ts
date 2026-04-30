import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  private async validateProjectAccess(projectId: string, workspaceId: string) {
    const project = await this.prisma.project.findFirst({
      where: {
        id: projectId,
        workspaceId,
      },
    });

    if (!project) {
      throw new Error('Project not found or access denied');
    }

    return project;
  }

  async create(workspaceId: string, projectId: string, title: string) {
    await this.validateProjectAccess(projectId, workspaceId);

    return this.prisma.task.create({
      data: {
        title,
        project: {
          connect: {
            id: projectId,
          },
        },
      },
    });
  }

  getTasks(workspaceId: string, projectId: string) {
    return this.prisma.task.findMany({
      where: {
        projectId,
        project: {
          workspaceId,
        },
      },
    });
  }

  toggleTask(workspaceId: string, taskId: string, completed: boolean) {
    return this.prisma.task.update({
      where: {
        id: taskId,
        project: {
          workspaceId,
        },
      },
      data: { completed },
    });
  }

  deleteTask(workspaceId: string, taskId: string) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
        project: {
          workspaceId,
        },
      },
    });
  }
}
