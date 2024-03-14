import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { AuthDto } from '../dtos/auth.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(email: string, password: string) {
        const person = await this.authService.validatePerson(email, password);
        if (!person) {
            console.log('inside here')
            // throw new UnauthorizedException();
            return null
          }
        return person;
    }
}
