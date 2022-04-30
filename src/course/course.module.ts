import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesRepository } from './repositories/courses.repository';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './course.roles';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoursesRepository]),
    AccessControlModule.forRoles(roles),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
