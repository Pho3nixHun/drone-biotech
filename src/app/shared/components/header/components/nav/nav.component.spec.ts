import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavItemVM } from './components/nav-item/nav-item-vm';

@Component({
    imports: [NavComponent, NavItemComponent],
    template: `
        <app-nav>
            <app-nav-item [vm]="vm" />
            <app-nav-item [vm]="vm" />
            <button>Button</button>
        </app-nav>
    `,
})
class TestHostComponent {
    @Input() vm: NavItemVM = {
        routerLink: '/test',
    };
}

describe('NavComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot testing
    it('should project the provided content', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {});

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    it('should assign routerLink if provided in VM', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {
            routerLink: '/test',
        });

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    it('should assign href with default target and relation if only href is provided in VM', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {
            href: 'http://test.com',
        });

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    it('should assign href with target and relation if provided in VM', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {
            href: 'http://test.com',
            target: '_blank',
            rel: 'noopener',
        });

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
