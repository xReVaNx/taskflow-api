import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CurrentWorkspace } from '../common/decorators/current-workspace.decorator';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post(':projectId')
  create(
    @CurrentWorkspace() workspaceId: string,
    @Param('projectId') projectId: string,
    @Body('title') title: string,
  ) {
    return this.tasksService.create(workspaceId, projectId, title);
  }

  @Get(':projectId')
  getTasks(
    @CurrentWorkspace() workspaceId: string,
    @Param('projectId') projectId: string,
  ) {
    return this.tasksService.getTasks(workspaceId, projectId);
  }

  @Patch(':projectId')
  toggle(
    @CurrentWorkspace() workspaceId: string,
    @Param('taskId') taskId: string,
    @Body('completed') completed: boolean,
  ) {
    return this.tasksService.toggleTask(workspaceId, taskId, completed);
  }

  @Delete(':projectId')
  delete(@CurrentWorkspace() workspaceId, @Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(workspaceId, taskId);
  }
}
