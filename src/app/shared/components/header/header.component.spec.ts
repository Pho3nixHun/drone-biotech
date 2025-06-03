import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { Component } from '@angular/core';
import { LogoComponent } from '@components/header/components/logo/logo.component';
import { LogoVM } from './components/logo/logo-vm.model';

@Component({
    imports: [HeaderComponent, LogoComponent, NavComponent],
    template: `
        <app-header>
            <app-logo [vm]="vm" />
            <app-logo [vm]="vm" />
            <app-nav></app-nav>
            <app-nav></app-nav>
            <div>This should not be projected</div>
        </app-header>
    `,
})
class TestHostComponent {
    vm: LogoVM = {
        altText: 'lepke',
        imageSrc: 'assets/lepke.jpg',
    };
}
describe('HeaderComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should project <app-logo>, <app-nav> elements and ignore other elements', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
