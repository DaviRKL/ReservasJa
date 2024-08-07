import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { CuisineType } from "@prisma/client";

export class CreateRestaurantDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsEnum(CuisineType)
    cuisineType: CuisineType;

    @IsNotEmpty()
    ownerId: number;
}
