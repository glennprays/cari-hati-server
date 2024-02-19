import { Module } from '@nestjs/common';
import { SendModule } from './send/send.module';
import { ReceivedModule } from './received/received.module';

@Module({
  imports: [SendModule, ReceivedModule]
})
export class GiftModule {}
