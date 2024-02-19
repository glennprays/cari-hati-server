import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [RegistrationModule, MatchModule]
})
export class UserModule {}
