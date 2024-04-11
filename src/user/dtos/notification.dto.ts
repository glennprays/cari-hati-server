export class NotificationMessageDTO {
    notification: {
        title: string;
        body: string;
    };
    webpush: {
        fcmOptions: {
            link: string;
        };
    };
    data?: any;
}
