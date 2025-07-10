import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardComponent } from './section-card.component';
import { Component, input } from '@angular/core';
import { SectionCardVM } from './section-card.model';
import { getTranslocoModule } from 'transloco-testing.module';

const enMock = {
    title: 'tit',
};

const vm: SectionCardVM = {
    titleKey: enMock.title,
};

@Component({
    imports: [SectionCardComponent],
    template: `<app-section-card [vm]="vm()"
        ><div>Should be projected</div></app-section-card
    >`,
})
class TestHostComponent {
    public vm = input.required<SectionCardVM>();
}

describe('SectionCardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: enMock },
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
});
