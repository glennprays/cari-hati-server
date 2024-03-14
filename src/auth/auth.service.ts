import { BadRequestException, Injectable } from '@nestjs/common';
import { PersonService } from 'src/user/services/person.service';
import { AuthDto } from './dtos/auth.dto';
import { verify } from 'argon2';
import { Person } from 'src/user/models/person.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private personService: PersonService,
        private jwtService: JwtService,
    ) {}

    async validatePerson(emailInput: string, passwordInput: string) {
        console.log('here validate');
        const person = await this.personService.findOneByEmail(emailInput);
        if (!person) {
            // throw new BadRequestException('person not found');
            return null
        }
        const isMatch: boolean = await verify(person.password, passwordInput);
        if (!isMatch) {
            // throw new BadRequestException('Invalid password');
            return null
        }
        const { password, ...result } = person;
        return result;
    }

    async signIn(data: AuthDto) {
        const person = await this.validatePerson(data.email, data.password);
        const payload = {
            username: person.email,
            sub: {
                role: person.role,
            },
        };

        const token = this.jwtService.sign(payload);
        return { person: { ...person }, access_token: token };
    }
}
