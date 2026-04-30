import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CurrentWorkspace } from '../../common/decorators/current-workspace.decorator';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Post()
  createProject(
    @CurrentWorkspace() workspaceId: string,
    @Body('name') name: string,
  ) {
    return this.projectsService.createProject(workspaceId, name);
  }

  @Get()
  getProjects(@CurrentWorkspace() workspaceId: string) {
    return this.projectsService.getProjects(workspaceId);
  }

  @Get(':id')
  getProject(@CurrentWorkspace() workspaceId: string, @Param('id') id: string) {
    return this.projectsService.GetProject(workspaceId, id);
  }

  @Patch('id')
  updateProject(
    @CurrentWorkspace() workspaceId: string,
    @Param('id') id: string,
    @Body('name') name: string,
  ) {
    return this.projectsService.updateProject(workspaceId, id, name);
  }

  @Delete('id')
  deleteProject(
    @CurrentWorkspace() workspaceId: string,
    @Param('id') id: string,
  ) {
    return this.projectsService.deleteProject(workspaceId, id);
  }
}
