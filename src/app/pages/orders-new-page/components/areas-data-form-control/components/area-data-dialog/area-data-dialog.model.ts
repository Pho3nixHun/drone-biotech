import { Coordinates } from '@stores/location/location.model';
import { InputTextXVM } from '@components/input-text/input-text.component';
import { InputTextareaXVM } from '@components/input-textarea/input-textarea.component';
import { InputNumberXVM } from '@components/input-number/input-number.component';
import { DialogLayoutXVM } from '@components/dialog-layout/dialog-layout.component';
import { ButtonXVM } from '@components/button/button.model';
import { PolygonContextMenuVM } from '@components/polygon-context-menu/polygon-context-menu.component';
import { TabsVM } from '@components/tabs/tabs.component';
import { TabButtonXVM } from '@components/tabs/components/tabs-nav/components/tab-button/tab-button.component';
import { PolygonColors } from '@directives/gmp-polygon-drawing/gmp-polygon-drawing.model';

export interface AreaDataDialogVM extends Omit<DialogLayoutXVM, 'titleKey'> {
    actualPosition: Coordinates | null;
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
    mapTabsXVM: MapsTabsXVM;
}

interface MapsTabsXVM extends TabsVM {
    visualTabItemVM: VisualTabItemVM;
    textTabItemVM: TextTabItemVM;
}

export enum TabItemID {
    MAP = 'map',
    COORDINATES = 'coords',
}

interface BaseTabItem<T> {
    id: TabItemID;
    tabButtonXVM: TabButtonXVM;
    content: T;
}

type VisualTabItemVM = BaseTabItem<GmpMapXVM>;
type TextTabItemVM = BaseTabItem<{
    targetAreaInvalidTextKey: string;
    entryPointInvalidTextKey: string;
    targetAreaInputTextareaXVM: InputTextareaXVM;
    entryPointInputTextXVM: InputTextXVM;
}>;
export interface Mission {
    id: string;
    name: string;
    entryPoint: Coordinates;
    targetArea: Coordinates[];
    applicationDate: Date;
    dosePerHq: number;
    comment?: string;
}

export interface AreaDataDialogResponseWithAreaData {
    type: 'submit';
    areaData: Mission;
}

export interface AreaDataDialogResponseWithoutAreaData {
    type: 'cancel';
}

export type AreaDataDialogResponse =
    | AreaDataDialogResponseWithAreaData
    | AreaDataDialogResponseWithoutAreaData;

interface GmpMapXVM {
    polygonColors: PolygonColors;
    contentValueKey: string;
    polygonContextMenuVM: PolygonContextMenuVM;
    removeAdvancedMarkerButtonXVM: ButtonXVM;
    addAdvancedMarkerButtonXVM: ButtonXVM;
    addPolygonButtonXVM: ButtonXVM;
}
