import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PersonLoginResponseDTO } from 'src/user/dtos/person.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
        });
    }

    async validate(
        email: string,
        password: string,
    ): Promise<PersonLoginResponseDTO> {
        const person = await this.authService.validatePerson(email, password);
        if (!person) {
            throw new BadRequestException();
        }
        return person;
    }
}
