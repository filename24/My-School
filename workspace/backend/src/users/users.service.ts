import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/main.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.db.user.create({
      data,
    });
  }

  findAll(): Promise<User[]> {
    return this.db.user.findMany();
  }

  findOne(id: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.db.user.findUnique({
      where: id,
    });
  }

  update(
    id: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.db.user.update({
      data,
      where: id,
    });
  }

  remove(id: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.db.user.delete({
      where: id,
    });
  }
}
