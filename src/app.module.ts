import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './modules/auth/auth.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';

@Module({
  imports: [AuthModule, WorkspaceModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
