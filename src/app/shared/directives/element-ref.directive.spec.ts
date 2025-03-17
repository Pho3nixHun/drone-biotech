import { Component, ElementRef, signal } from '@angular/core';
import { ElementRefDirective } from './element-ref.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ElementRefDirective', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let testHostComponent: TestHostComponent;

    // Create a simple host component to test the directive
    @Component({
        template: `<div [appElementRef]="attachedSignal$"></div>`,
    })
    class TestHostComponent {
        public attachedSignal$ = signal<ElementRef<HTMLDivElement> | null>(
            null
        );
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ElementRefDirective],
            declarations: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
    });

    it('should set the attachedSignal$ with ElementRef after view initialization', () => {
        // Arrange
        /*There is no need to arrange*/

        //Act
        fixture.detectChanges();

        //Assert
        expect(testHostComponent.attachedSignal$()).toBeInstanceOf(ElementRef);
    });
});
