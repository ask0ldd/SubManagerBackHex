/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/user/adapters/**/*.entity{.ts,.js}'], // import all entities across the project
      synchronize: true,
      dropSchema: true, // !!! dev mode
    }),
  ],
})
export class DBModule {}