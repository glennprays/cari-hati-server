export class RedisKeyFactory {
    static createVerificationCodeKey(email: string) {
        return `verification_code_${email}`;
    }

    static createChatRoomKey(roomId: string) {
        return `Room:${roomId}`;
    }

    static createWsUserKey(clientId: string) {
        return `WSUser:${clientId}`;
    }

    static createChatMessageKey(roomId: string) {
        return `Message:${roomId}`;
    }
}
