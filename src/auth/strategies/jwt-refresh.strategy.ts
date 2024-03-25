import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PersonTokenPayload } from '../models/payload.model';

export function tokenExtractorFromCookies(req) {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return null;
    }
    let token = cookies.match(/refresh_token=([^;]*)/);

    if (token) {
        token = token[0].replace('refresh_token=', '');
    }
    return token;
}

export class JwtRefreshStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                tokenExtractorFromCookies,
            ]),
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_REFRESH_TOKEN_SECRET}`,
            passReqToCallback: true,
        });
    }

    async validate(req: Request, payload: any): Promise<PersonTokenPayload> {
        const token = tokenExtractorFromCookies(req);
        const { sub, username } = payload;

        return { sub, username };
    }
}
