import { Module } from '@nestjs/common';
import { CommonTypesService } from './common-types.service';

@Module({
  providers: [CommonTypesService],
  exports: [CommonTypesService],
})
export class CommonTypesModule {}
