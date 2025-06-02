import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsPageComponent } from './mission-details-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    provideMockMissionDetailsPageService,
    updateVMSignal,
} from './mission-details-page.service.mock';
import { missionDetailsPageVMMock } from './mission-details-page.mock';
import { DialogService } from '@services/dialog/dialog.service';
import { DialogServiceMock } from '@services/dialog/dialog.service.mock';
import { MapAreaSelectFormControlMockService } from './components/map-form-control/components/map-area-select-form-control/map-area-select-form-control.service.mock';
import { MapAreaSelectFormControlService } from './components/map-form-control/components/map-area-select-form-control/map-area-select-form-control.service';
import { MapPointSelectFormControlService } from './components/map-form-control/components/map-point-select-form-control/map-point-select-form-control.service';
import { MapPointSelectFormControlMockService } from './components/map-form-control/components/map-point-select-form-control/map-point-select-form-control.service.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { selectUser } from '@stores/auth/auth.selector';

describe('MissionDetailsPageComponent', () => {
    let component: MissionDetailsPageComponent;
    let compiled: HTMLElement;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MissionDetailsPageComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockMissionDetailsPageService(),
                provideMockStore({
                    selectors: [
                        {
                            selector: selectUser,
                            value: {
                                uid: 'id',
                                photoURL: 'nourl',
                                email: 'test@gmail.com',
                                displayName: 'John',
                            },
                        },
                    ],
                }),
            ],
        })
            .overrideProvider(DialogService, {
                useFactory: () => new DialogServiceMock(),
            })
            .overrideProvider(MapAreaSelectFormControlService, {
                useFactory: () => MapAreaSelectFormControlMockService,
            })
            .overrideProvider(MapPointSelectFormControlService, {
                useFactory: () => MapPointSelectFormControlMockService,
            })
            .compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange
        updateVMSignal(missionDetailsPageVMMock);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit test
    it('should send message if it is valid and there is a user', async () => {
        //Arrange
        const serviceSpy = jest.spyOn(component['pageService'], 'sendMessage');
        //Act
        component['messageControl'].setValue('Message');
        await component['sendMessage']();

        //Assert
        expect(serviceSpy).toHaveBeenCalled();
    });

    // Unit test
    it('should add log item', async () => {
        //Arrange
        const serviceSpy = jest.spyOn(component['pageService'], 'addLogItem');
        //Act
        component['progressLogItemControl'].setValue({
            date: new Date(1),
            description: 'desc',
            statusType: 'abort',
        });

        //Assert
        expect(serviceSpy).toHaveBeenCalled();
    });
});
