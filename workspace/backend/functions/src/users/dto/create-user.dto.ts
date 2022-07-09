import { User } from "@typings/*";

export class CreateUserDto implements User {
  id: string;
  name: string;
  birthday: Date;
  email: string;
  phone: string;
  flag: number;
  registerID: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  schools: null;
}
