import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}
  @Post()
  createWorkspace(@Req() req) {
    return this.workspaceService.createWorkspace(req.user.userId);
  }

  @Get()
  getMyWorkspaces(@Req() req) {
    return this.workspaceService.getWorkspaces(req.user.userId);
  }

  @Get(':id')
  getWorkspace(@Req() req, @Param('id') id: string) {
    return this.workspaceService.getWorkspaceById(id, req.user.userId);
  }
}
