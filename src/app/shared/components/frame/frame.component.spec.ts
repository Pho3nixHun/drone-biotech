import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { Component, input } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { FrameVM } from './frame.model';

const en = { title: 'Our Products' };

const vm: FrameVM = { titleKey: en.title };

@Component({
    imports: [FrameComponent],
    template: `<app-frame [vm]="vm()"
        ><div>Should be projected</div></app-frame
    >`,
})
class TestHostComponent {
    public vm = input<FrameVM | null>(null);
}
describe('FrameComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template when the vm is provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template when the vm is not provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', null);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
