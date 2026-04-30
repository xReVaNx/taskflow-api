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
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}
  @Post()
  createProject(
    @CurrentWorkspace() workspaceId: string,
    @Body('name') dto: CreateProjectDto,
  ) {
    return this.projectsService.createProject(workspaceId, dto.name);
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
    @Body('name') dto: UpdateProjectDto,
  ) {
    return this.projectsService.updateProject(workspaceId, id, dto.name);
  }

  @Delete('id')
  deleteProject(
    @CurrentWorkspace() workspaceId: string,
    @Param('id') id: string,
  ) {
    return this.projectsService.deleteProject(workspaceId, id);
  }
}
