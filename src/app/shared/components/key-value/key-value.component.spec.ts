import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueComponent } from './key-value.component';
import { Component, input } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';

const en = {
    label: 'value',
};

@Component({
    template: `
        <app-key-value [label]="vm()">
            <p>Should be projected</p>
        </app-key-value>
    `,
})
class TestHostComponent {
    public vm = input.required<string>();
}

describe('KeyValueComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                KeyValueComponent,
                getTranslocoModule({
                    langs: { en: en },
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

    it('should render the template when the VM is provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', en.label);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
