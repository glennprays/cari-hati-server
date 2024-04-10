import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PersonTokenPayload } from '../models/payload.model';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_ACCESS_TOKEN_SECRET}`,
        });
    }

    async validate(payload: any): Promise<PersonTokenPayload> {
        const { sub, username } = payload;
        return { sub, username };
    }
}
