import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.PG_URL,
      autoLoadEntities: true,
      // synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    }),
  ],
})
export class DatabaseModule {}
