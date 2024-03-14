export interface Message {
    conversationId: string;
    sender: string;
    text: string;
    imageAttachment?: string;
    createdAt: Date;
}
