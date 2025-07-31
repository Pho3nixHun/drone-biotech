export type Role = 'customer' | 'office' | 'pilot';

export interface Sender {
    role: Role;
    name: string;
    photoUrl: string | null;
}

export interface Message {
    sender: Sender;
    sendingDate: Date;
    message: string;
}
