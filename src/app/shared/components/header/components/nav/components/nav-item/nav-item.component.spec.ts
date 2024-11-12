import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavItemComponent } from './nav-item.component';
import { Component, Input } from '@angular/core';
import { NavItemVM } from './nav-item-vm';

@Component({
    template: `<app-nav-item [vm]="vm">Home</app-nav-item>`,
})
class TestHostComponent {
    @Input() vm!: NavItemVM;
}

describe('NavItemComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    const mockVM: NavItemVM = { routerLink: '' };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent],
            imports: [NavItemComponent, NavItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot testing
    it('should render the template with the provided VM and ng-content', () => {
        //Arrange
        fixture.componentRef.setInput('vm', mockVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
