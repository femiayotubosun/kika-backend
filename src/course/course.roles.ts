import { RolesBuilder } from 'nest-access-control';

export enum CourseRoles {
  INSTRUCTOR_CREATE_ANY_COURSE = 'INSTRUCTOR_CREATE_ANY_COURSE',
  INSTRUCTOR_READ_OWN_COURSE = 'INSTRUCTOR_READ_OWN_COURSE',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(CourseRoles.INSTRUCTOR_CREATE_ANY_COURSE)
  .createOwn('course')
  .deleteOwn('course')
  .readOwn('course');
