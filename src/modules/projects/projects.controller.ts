import { Controller, Get } from '@nestjs/common';
import { CurrentWorkspace } from '../../common/decorators/current-workspace.decorator';

@Controller('projects')
export class ProjectsController {
  @Get()
  getProjects(@CurrentWorkspace() workspaceId: string) {
    return {
      workspaceId,
      message: 'Projects for workspace',
    };
  }
}
