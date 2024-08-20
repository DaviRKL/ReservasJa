import { UserRole } from '@prisma/client';
import { IsString, IsEmail, IsNotEmpty, IsOptional, IsBase64, IsEnum } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsOptional()
    photo?: string;

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
}