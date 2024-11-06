import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerListComponent } from './partner-list.component';
import { Component } from '@angular/core';
import { PartnerLogoComponent } from './components/partner-logo/partner-logo.component';
import { PartnerLogoVM } from './components/partner-logo/partner-logo-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = {
    altText: 'logo',
};

@Component({
    template: `
        <app-partner-list>
            <app-partner-logo [vm]="vm" />
            <app-partner-logo [vm]="vm" />
            <app-partner-list>Should not be projected</app-partner-list>
        </app-partner-list>
    `,
})
class TestHostComponent {
    vm: PartnerLogoVM = {
        altTextKey: 'altText',
        imageSrc: 'assets/lepke.jpg',
    };
}

describe('PartnerListComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PartnerListComponent,
                PartnerLogoComponent,
                getTranslocoModule({
                    langs: { en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            declarations: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange

        //Act

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
