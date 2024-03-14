import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PersonTokenPayload } from '../models/payload.model';

export class JwtRefreshStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
        });
    }

    async validate(payload: any): Promise<PersonTokenPayload> {
        const { sub, username } = payload;
        return { sub, username };
    }
}
