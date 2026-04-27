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

  getProjects(workspaceId: string) {
    return this.prisma.project.findMany({
      where: { workspaceId },
    });
  }
}
