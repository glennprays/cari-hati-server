export class RedisKeyFactory {
    static verificationCodeKey(email: string) {
        return `verification_code_${email}`;
    }

    static chatRoomKey(roomId: string) {
        return `Room:${roomId}`;
    }

    static wsUserKey(clientId: string) {
        return `WSUser:${clientId}`;
    }

    static chatMessageKey(roomId: string) {
        return `Message:${roomId}`;
    }

    static decodeChatRoomKey(key: string) {
        return key.replace('Room:', '');
    }

    static resetPasswordKey(email: string) {
        return `reset_password_${email}`;
    }
}
