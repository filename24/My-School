import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ResponseData, snowflake, StatusCode } from '@school/global';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body()
    data: {
      name: string;
      email?: string;
      phone: string;
      birthday: number;
      password: string;
    },
  ): Promise<ResponseData<User>> {
    const { name, email, phone, birthday, password } = data;
    const id = String(snowflake.generate());
    const userData = await this.usersService.create({
      name,
      password,
      phone,
      birthday,
      email,
      id,
    });

    return {
      code: StatusCode.Created,
      data: userData,
    };
  }
  @Get()
  async findAll(): Promise<ResponseData<User[]>> {
    const data = await this.usersService.findAll();
    return {
      code: StatusCode.Ok,
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseData<User>> {
    const data = await this.usersService.findOne({ id });

    return {
      code: StatusCode.Ok,
      data,
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: any,
  ): Promise<ResponseData<User>> {
    const userData = await this.usersService.update({ id }, data);

    return {
      code: StatusCode.Ok,
      data: userData,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ResponseData<User>> {
    const data = await this.usersService.remove({ id });

    return {
      code: StatusCode.Ok,
      data,
    };
  }
}
