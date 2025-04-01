import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
} from 'src/app/pages/orders-new-page/components/areas-data-form-control/components/area-data-dialog/area-data-dialog.model';
import { DialogService } from './dialog.service';

@Injectable({
    providedIn: 'root',
})
class DialogServiceMock {
    create = jest.fn();
}

export const provideMockDialogService = () => ({
    provide: DialogService,
    useClass: DialogServiceMock,
});

// Using Subject instead of signal to avoid requiring an initial value
const areaDataDialogResponse = new Subject<
    AreaDataDialogResultWithoutAreaData | AreaDataDialogResultWithAreaData
>();

export const updateAreaDataDialogResponse = (
    response:
        | AreaDataDialogResultWithoutAreaData
        | AreaDataDialogResultWithAreaData
) => areaDataDialogResponse.next(response);
