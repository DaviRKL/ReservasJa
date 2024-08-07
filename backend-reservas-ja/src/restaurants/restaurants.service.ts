import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    try {
      const restaurant = await this.prisma.restaurant.create({
        data: {
          ...createRestaurantDto,
        },
      });
      return restaurant;
    } catch (error) {
      throw new Error(`Erro ao criar restaurante: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const restaurants = await this.prisma.restaurant.findMany();
      return restaurants
    } catch (error) {
      throw new Error(`Erro ao buscar restaurantes: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const restaurant = await this.prisma.restaurant.findFirst({
        where: { id },
      });
      if (!restaurant) {
        throw new Error('Transação não encontrada');
      }
      return restaurant;
    } catch (error) {
      throw new Error(`Erro ao buscar transação: ${error.message}`);
    }
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    try {
      const restaurant = await this.prisma.restaurant.update({
        where: { id },
        data: updateRestaurantDto,
      });
      return restaurant;
    } catch (error) {
      throw new Error(`Erro ao atualizar transação: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      const restaurant = await this.prisma.restaurant.deleteMany({
        where: { id },
      });
      if (!restaurant.count) {
        throw new Error('Transação não encontrada ou usuário não autorizado');
      }
      return { message: 'Transação removida com sucesso' };
    } catch (error) {
      throw new Error(`Erro ao remover transação: ${error.message}`);
    }
  }
}
