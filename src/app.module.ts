import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './restaurant/restaurant.entity';
import { RestaurantController } from './restaurant/restaurant.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest_ejercicio1', // crear esta base de datos en MySQL primero
      entities: [Restaurant],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([Restaurant]) // Esto permite acceder a Repository
    
  ],
  controllers: [RestaurantController],
  providers: [],
})
export class AppModule {}
