import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolsService } from './schools.service';
import {
  ResponseData,
  SchoolFlags,
  snowflake,
  StatusCode,
} from '@school/global';
import { Prisma, School } from '@prisma/client';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      address: string;
      website?: string;
      phone?: string;
      email?: string;
      flag: SchoolFlags;
    },
  ): Promise<ResponseData<School>> {
    const { name, address, website, phone, email, flag } = data;
    const id = String(snowflake.generate());
    const schoolData = await this.schoolsService.create({
      name,
      address,
      website,
      phone,
      email,
      flag,
      id,
    });

    return {
      code: StatusCode.Created,
      data: schoolData,
    };
  }

  @Get()
  async findAll(): Promise<ResponseData<School[]>> {
    const data = await this.schoolsService.findAll();
    return {
      code: StatusCode.Ok,
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseData<School>> {
    const data = await this.schoolsService.findOne({ id });

    return {
      code: StatusCode.Ok,
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.SchoolUpdateInput,
  ): Promise<ResponseData<School>> {
    const schoolData = await this.schoolsService.update({ id }, data);

    return {
      code: StatusCode.Ok,
      data: schoolData,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResponseData<School>> {
    const data = await this.schoolsService.remove({ id });

    return {
      code: StatusCode.Ok,
      data,
    };
  }
}
