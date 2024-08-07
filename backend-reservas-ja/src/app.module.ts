import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    UserModule, RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
