import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from './guards/jwt.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

@UseGuards(JwtGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {

  @Get('test')
  test() {
    return 'admin only data';
  }
}
