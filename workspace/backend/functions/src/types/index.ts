import { HttpStatus } from '@nestjs/common';

export interface RestContent {
  data: any;
  code: HttpStatus;
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
  birthday: Date;
  email?: string;
  phone: string;
  flag: UserFlags;
  registerID?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  schools: null | School[];
}

export interface School {
  id: string;
  name: string;
  address: string;
  type: SchoolFlags;
  website: string;
  createdAt: Date;
  updatedAt: Date;
}
export const enum SchoolFlags {
  other = 0 << 0,
  primary = 1 << 0,
  secondary = 1 << 1,
  highschool = 1 << 2,
  university = 1 << 3,
}

export const enum UserFlags {
  general = 0 << 0,
  student = 1 << 0,
  teacher = 1 << 1,
  maneger = 1 << 2,
}

export const enum InjectToken {
  DatabaseConnection = 'DATABASE_CONNECTION',
  UserModel = 'USER_MODEL',
}
