import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [WorkspaceService, PrismaService],
  controllers: [WorkspaceController],
})
export class WorkspaceModule {}
