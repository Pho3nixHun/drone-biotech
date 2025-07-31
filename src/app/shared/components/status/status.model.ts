export interface StatusVM {
    styles: StatusXVMStyle;
}

export enum StatusXVMStyle {
    ACTIVE = 'bg-green-200 text-green-800',
    PENDING = 'bg-red-200 text-red-800',
    COMPLETED = 'bg-orange-200 text-orange-800',
}
