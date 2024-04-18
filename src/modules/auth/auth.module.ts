import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { Users, UsersSchema } from 'src/schema/users.schema';
import { AuthService } from 'src/services/auth/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
