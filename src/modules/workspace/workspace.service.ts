import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) {}

  async createWorkspace(userId: string) {
    return this.prisma.workspace.create({
      data: {
        name: 'New Workspace',
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async getWorkspaces(userId: string) {
    return this.prisma.workspace.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
    });
  }

  async getWorkspaceById(workspaceId: string, userId: string) {
    return this.prisma.workspace.findUnique({
      where: {
        id: workspaceId,
        users: {
          some: {
            id: userId,
          },
        },
      },
    });
  }
}
