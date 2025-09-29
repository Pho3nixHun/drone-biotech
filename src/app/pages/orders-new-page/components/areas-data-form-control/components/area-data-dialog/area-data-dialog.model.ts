import { Coordinates } from '@stores/location/location.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';
import { InputNumberXVM } from '@components/input-number/input-number.component';
import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';
import { ButtonXVM } from '@components/button/button.model';
import { ControlPosition } from '@interfaces/control-position.enum';
import { GmpPlaceAutocompleteXVM } from '@directives/gmp-place-autocomplete/gmp-place-autocomplete.directive';
import { PolygonContextMenuVM } from '@components/polygon-context-menu/polygon-context-menu.component';

export interface AreaDataDialogVM extends Omit<DialogLayoutXVM, 'titleKey'> {
    addTitleKey: string;
    editTitleKey: string;
    isEntryPointReadonly?: boolean;
    isTargetAreaReadonly?: boolean;
    requiredAssistiveTextKey: string;
    missionNameMaxCharactersAllowedAssistiveTextValueKey: string;
    missionNameMaxCharactersCounterAssistiveTextValueKey: string;
    dosePerHqMinErrorAssistiveTextValueKey: string;
    missionNameInputTextXVM: InputTextXVM;
    dosePerHqInputTextXVM: InputNumberXVM;
    commentInputTextareaXVM: InputTextareaXVM;
    applicationDateInputTextXVM: InputTextXVM;
    gmpMapXVM: GmpMapXVM;
}

export interface AreaData {
    id: string;
    comment?: string;
    missionName: string;
    targetArea: Coordinates[];
    entryPoint: Coordinates;
    dosePerHq: number;
    applicationDate: Date;
}

export interface AreaDataDialogResponseWithAreaData {
    type: 'submit';
    areaData: AreaData;
}

export interface AreaDataDialogResponseWithoutAreaData {
    type: 'cancel';
}

export type AreaDataDialogResponse =
    | AreaDataDialogResponseWithAreaData
    | AreaDataDialogResponseWithoutAreaData;

interface GmpMapXVM {
    contentValueKey: string;
    actualPosition: Coordinates | null;
    polygonContextMenuVM: PolygonContextMenuVM;
    gmpPlaceAutocompleteXVM: GmpPlaceAutocompleteXVM;
    removeAdvancedMarkerButtonXVM: ButtonXVM;
    addAdvancedMarkerButtonXVM: ButtonXVM;
    buttonsControlPosition: ControlPosition;
    addPolygonButtonXVM: ButtonXVM;
}
