import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  createProject(workspaceId: string, name: string) {
    return this.prisma.project.create({
      data: {
        name,
        workspaceId,
      },
    });
  }

  GetProject(workspaceId: string, projectId: string) {
    return this.prisma.project.findFirst({
      where: {
        id: projectId,
        workspaceId,
      },
    });
  }

  getProjects(workspaceId: string) {
    return this.prisma.project.findMany({
      where: { workspaceId },
    });
  }

  updateProject(workspaceId: string, projectId: string, name: string) {
    return this.prisma.project.update({
      where: {
        id: projectId,
        workspaceId,
      },
      data: {
        name,
      },
    });
  }

  deleteProject(workspaceId: string, projectId: string) {
    return this.prisma.project.delete({
      where: {
        id: projectId,
        workspaceId,
      },
    });
  }
}
