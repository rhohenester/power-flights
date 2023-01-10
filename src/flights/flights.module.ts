import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
