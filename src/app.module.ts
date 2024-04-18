import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';

import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    UsersModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
