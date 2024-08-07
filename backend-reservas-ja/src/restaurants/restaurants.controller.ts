import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res, HttpStatus } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Request, Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  async create(@Req() req: Request, @Body() createRestaurantDto: CreateRestaurantDto) {
    try {
      const restaurant = await this.restaurantsService.create(createRestaurantDto);
      return { statusCode: HttpStatus.CREATED, data: restaurant };
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
    }
  }

  @Get()
  async findAll(@Req() req: Request) {
    try {
      const restaurants = await this.restaurantsService.findAll();
      return { statusCode: HttpStatus.OK, data: restaurants };
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const restaurant = await this.restaurantsService.findOne(+id);
      return { statusCode: HttpStatus.OK, data: restaurant};
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
    }
  }
  
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    try {
      const restaurant = await this.restaurantsService.update(+id, updateRestaurantDto);
      return { statusCode: HttpStatus.OK, data: restaurant};
    } catch (error) {
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error: error.message };
    }
    
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await  this.restaurantsService.remove(+id);
      return { statusCode: HttpStatus.NO_CONTENT};
    } catch (error) {
      return { statusCode: HttpStatus.BAD_REQUEST};
    }
  }
}
