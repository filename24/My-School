import { Module } from '@nestjs/common';
import { SchoolsModule } from './schools/schools.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, SchoolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
