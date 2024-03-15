export class RedisKeyFactory {
    static createVerificationCodeKey(email: string) {
        return `verification_code_${email}`;
    }
}
