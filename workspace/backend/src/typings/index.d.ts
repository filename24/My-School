export interface User {
  id: string;
  name: string;
  birthday: Date;
  email?: string;
  phone: string;
  flag: Role;
  registerID?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  schools: School[];
}

export interface School {
  id: string;
  name: string;
  address: string;
  type: SchoolType;
  website: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SchoolType = 'primary' | 'secondary' | 'highschool' | 'university' | 'other';
export enum UserFlags {
  general = 0 << 0,
  student = 1 << 0,
  teacher = 1 << 1,
  maneger = 1 << 2,
}
