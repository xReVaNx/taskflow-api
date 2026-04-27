import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrentWorkspace } from '../../common/decorators/current-workspace.decorator';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Post()
  createProject(@CurrentWorkspace() workspaceId: string, @Body('name') name: string) {
    return this.projectsService.createProject(workspaceId, name);
  }

  @Get()
  getProjects(@CurrentWorkspace() workspaceId: string) {
    return this.projectsService.getProjects(workspaceId);
  }
}
