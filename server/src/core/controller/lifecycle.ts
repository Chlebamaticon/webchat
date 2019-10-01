export interface OnInit {
    onInit(): void;
}

export interface OnPacket {
    onPacket(event: SocketIO.Packet): void;
}