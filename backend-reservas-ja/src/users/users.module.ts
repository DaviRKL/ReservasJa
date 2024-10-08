import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service'
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: '1h'},
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService, JwtModule]
})

export class UserModule {}
