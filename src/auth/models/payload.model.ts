export class PersonTokenPayload {
    username: string;
    sub: {
        role: string;
        id: string;
    };
}
