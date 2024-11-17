import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component } from '@angular/core';

@Component({
    template: `<app-frame><div>Should be projected</div></app-frame>`,
})
class TestHostComponent {}
describe('FrameComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FrameComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            declarations: [TestHostComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should project the provided content', () => {
        //Arrange
        //There is no need to arrange

        //Act
        //There is no need to act

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
