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

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post(':projectId')
  create(@Param('projectId') projectId: string, @Body('title') title: string) {
    return this.tasksService.create(projectId, title);
  }

  @Get(':projectId')
  getTasks(@Param('projectId') projectId: string) {
    return this.tasksService.getTasks(projectId);
  }

  @Patch(':projectId')
  toggle(
    @Param('taskId') taskId: string,
    @Body('completed') completed: boolean,
  ) {
    return this.tasksService.toggleTask(taskId, completed);
  }

  @Delete(':projectId')
  delete(@Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(taskId);
  }
}
