import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/main.service';
import { Prisma, School } from '@prisma/client';

@Injectable()
export class SchoolsService {
  constructor(private db: PrismaService) {}

  create(data: Prisma.SchoolCreateInput): Promise<School> {
    return this.db.school.create({
      data,
    });
  }

  findAll(): Promise<School[]> {
    return this.db.school.findMany();
  }

  findOne(id: Prisma.SchoolWhereUniqueInput): Promise<School> {
    return this.db.school.findUnique({
      where: id,
    });
  }

  update(
    id: Prisma.SchoolWhereUniqueInput,
    data: Prisma.SchoolUpdateInput,
  ): Promise<School> {
    return this.db.school.update({
      data,
      where: id,
    });
  }

  remove(id: Prisma.SchoolWhereUniqueInput): Promise<School> {
    return this.db.school.delete({
      where: id,
    });
  }
}
