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
import { CurrentWorkspace } from '../../common/decorators/current-workspace.decorator';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post(':projectId')
  create(
    @CurrentWorkspace() workspaceId: string,
    @Param('projectId') projectId: string,
    @Body('title') dto: CreateTaskDto,
  ) {
    return this.tasksService.create(workspaceId, projectId, dto.title);
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
    @Body('completed') dto: UpdateTaskDto,
  ) {
    return this.tasksService.toggleTask(workspaceId, taskId, dto.completed);
  }

  @Delete(':projectId')
  delete(@CurrentWorkspace() workspaceId, @Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(workspaceId, taskId);
  }
}
