import { FrameVM } from '@components/frame/frame.model';
import { AdvancedMarker } from '@directives/gmp-advanced-marker/gmp-advanced-marker.directive';
import { Polygon } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';
import { WithTitle } from '@interfaces/with-title.interface';
import { KeyValueXVM } from '../order-details-page/key-value/key-value.component'; // TODO needs to be relocated
import { BadgeXVM } from '@components/badge/badge.component';
import { ButtonXVM } from '@components/button/button.model';
import { WithLink } from '@interfaces/with-link.interface';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { MessageVM } from '@components/message/message.component';
import { AvatarVM } from '@components/avatar/avatar.model';
import { OfficeCancelDialogVM } from './components/office-cancel-dialog/office-cancel-dialog.model';
import { CustomerCancelDialogVM } from './components/customer-cancel-dialog/customer-cancel-dialog.model';

// Domain logic models

// User roles allowed in mission lifecycle
export type UserRole = 'pilot' | 'customer' | 'office';

// Basic user info shown in UI and logs
export interface User {
    role: UserRole;
    name: string;
    photoUrl: string | null;
}

// Single communication message between users
export interface Message {
    sender: User;
    sendingDate: Date;
    message: string;
}

// Mission lifecycle statuses
export type MissionStatus =
    | 'new'
    | 'scheduled'
    | 'accepted'
    | 'rejected'
    | 'traveling'
    | 'arrived'
    | 'in_progress'
    | 'aborted'
    | 'completed'
    | 'done';

// Common structure for an actionable dialog
export interface DialogActionBase<XVM = unknown> {
    accessConditions: { role: UserRole; status: MissionStatus }[];
    buttonXVM: ButtonXVM;
    dialogLayoutXVM: XVM;
}

// Cancel action — visible to customer only
interface CustomerCancelDialogAction
    extends DialogActionBase<CustomerCancelDialogVM> {
    type: 'customerCancel';
}

// Cancel action — visible to office staff only
interface OfficeCancelDialogAction
    extends DialogActionBase<OfficeCancelDialogVM> {
    type: 'officeCancel';
}

// All possible mission dialog actions
type DialogAction = CustomerCancelDialogAction | OfficeCancelDialogAction;

// Google Maps configuration/state
interface GmpMapXVM {
    polygon: Polygon;
    entryPoint: AdvancedMarker;
    bounds: google.maps.LatLngBounds | null;
}

// Frame containing aerial overview + button to open in maps
export interface MapOverviewFrameXVM extends FrameVM {
    overviews: KeyValueXVM[];
    gmpMapXVM: GmpMapXVM;
    openInGMButtonXVM: ButtonXVM & Partial<WithLink>;
}

// UI representation of a chat/log item with role + avatar
interface MessageXVM extends MessageVM {
    dateTime: Date;
    dateTimeValueKey: string;
    name: string;
    role: UserRole;
    nameXRoleValueKey: string;
    avatarVM: AvatarVM;
}

// Scrollable list of message items

// Log section: message list + input + submit
interface LogFrameXVM extends FrameVM {
    messageXVMs: MessageXVM[];
    readonlyMessageControl: boolean;
    messageInputTextXVM: InputTextXVM;
    submitButtonXVM: ButtonXVM;
}

// Badge that shows mission status
interface StatusBadgeXVM extends Pick<BadgeXVM, 'shape' | 'variant'> {
    status: MissionStatus;
}

// Header displaying mission metadata, allowed actions
export interface HeaderXVM extends WithTitle {
    statusBadgeXVM: StatusBadgeXVM;
    creationDateKeyValueXVM: KeyValueXVM;
    dialogActions: DialogAction[];
}

// Page-level view model
export interface MissionDetailsPageVM {
    user: User | null;
    scheduledDate: Date;
    dosePerHa: number;
    headerXVM: HeaderXVM;
    status: MissionStatus;
    mapOverviewFrameXVM: MapOverviewFrameXVM;
    logFrameXVM: LogFrameXVM;
}
