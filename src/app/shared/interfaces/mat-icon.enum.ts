export enum MatIcon {
    ADD = 'add',
    DELETE = 'delete',
    EDIT = 'edit',
    CLOSE = 'close',
    LOGOUT = 'logout',
    SEND = 'send',
    ADD_LOCATION_ALT = 'add_location_alt',
    LOCATION_OFF = 'location_off',
    ADD_BOX = 'add_box',
    MAP = 'map',
    TEXT_SNIPPET = 'text_snippet',
}

export interface WithMatIcon {
    icon: MatIcon;
}
