import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GearListing } from 'src/gear-listings/gear-listing.entity';
import { JamEvent } from 'src/jam-events/jam-event.entity';
import { User } from 'src/users/user.entity';
import { UsersModule } from './users/users.module';
import { GearListingsModule } from './gear-listings/gear-listings.module';
import { JamEventsModule } from './jam-events/jam-events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [User, GearListing, JamEvent],
        synchronize: configService.get<string>('ENV') === 'dev',
      }),
    }),
    UsersModule,
    GearListingsModule,
    JamEventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
