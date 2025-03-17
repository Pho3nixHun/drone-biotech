import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Component, Input } from '@angular/core';
import { HeroVM } from './hero-vm.model';

@Component({
    template: ` <app-hero [vm]="vm"
        ><h1>Hello</h1>
        <p>World</p>
        <a href="">Anchor</a><button>Button</button>
        <div>Should not be projected</div>
    </app-hero>`,
})
class TestHostComponent {
    @Input() vm: HeroVM | null = null;
}
describe('HeroComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    const vm: HeroVM = {
        backgroundImageSrc: 'assets/lepke.jpg',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeroComponent],
            declarations: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    //Snapshot test
    it('should not render the template when there is no VM provided', () => {
        //Arrange

        //Act

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it('should render the template when the VM is provided, project the content and ignore other elements', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
