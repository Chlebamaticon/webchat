export interface Message {
    uuid: string;
    message: string;
    isClientMessage: boolean;
    receivedAt: Date;
}
