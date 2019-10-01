declare module '@types/webchat-socket' {
    export const enum SocketEventType {
        POP_MESSAGE = 'webchat:server:message',
        CLIENT_BECAME_ONLINE = 'webchat:client_status:online',
        CLIENT_BECAME_OFFLINE = 'webchat:client_status:offline',
        CLIENT_BECAME_AWAY = 'webchat:client_status:away'
    }

    export interface SocketEvent {
        type: SocketEventType,
    }
}