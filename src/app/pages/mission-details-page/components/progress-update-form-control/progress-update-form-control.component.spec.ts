import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressUpdateFormControlComponent } from './progress-update-form-control.component';
import { Component, DebugElement, inject, input } from '@angular/core';
import { ProgressUpdateFormControlVM } from './progress-update-form-control.model';
import { DialogService } from '@services/dialog/dialog.service';
import { DialogServiceMock } from '@services/dialog/dialog.service.mock';
import { By } from '@angular/platform-browser';
import { getTranslocoModule } from 'transloco-testing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProgressLogItemVM } from './components/progress-frame/components/progress-log-item-list/components/progress-log-item/progress-log-item.model';

const progressItem: ProgressLogItemVM = {
    statusType: 'abort',
    date: new Date(1),
    description: 'description',
};

const en = { dateValue: 'date', title: 'tit' };

const vm: ProgressUpdateFormControlVM = {
    logFrameVM: {
        logItemVMs: [],
        progressItemDateValueKey: en.dateValue,
        titleKey: en.title,
    },
    statusFrameVM: { progressItemGroupVMs: [], titleKey: en.title },
};

@Component({
    imports: [ProgressUpdateFormControlComponent, ReactiveFormsModule],
    template: `
        <app-progress-update-form-control [vm]="vm()" [formControl]="control" />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<ProgressUpdateFormControlVM>();
    protected readonly control = this.fb.control<ProgressLogItemVM | null>(
        null
    );
}

describe('ProgressUpdateFormControlComponent', () => {
    let testHostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let component: ProgressUpdateFormControlComponent;
    let compiled: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        })
            .overrideProvider(DialogService, {
                useFactory: () => new DialogServiceMock(),
            })
            .compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        debugEl = fixture.debugElement.query(
            By.directive(ProgressUpdateFormControlComponent)
        );
        component = debugEl.componentInstance;
        compiled = debugEl.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit test
    it('should write value to the form of the parent component if the method is called with a progressItem', async () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);

        // Act
        await component['openDialog']('accept', progressItem);

        fixture.detectChanges();
        // Assert
        expect(component['progressItem']()).toBe(progressItem);
        expect(testHostComponent['control'].value).toBe(progressItem);
    });
});
