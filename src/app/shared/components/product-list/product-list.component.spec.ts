import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { Component } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { CardComponent } from '@components/card/card.component';

const en = {
    title: 'Title',
    description: 'Description',
    altText: 'Butterfly',
};
@Component({
    imports: [ProductListComponent, CardComponent],
    template: `
        <app-product-list>
            <app-card />
        </app-product-list>
    `,
})
class TestHostComponent {}
describe('ProductListComponent', () => {
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
    it('should render the template when the VM is provided and ignore other elements', () => {
        //Arrange
        /*No need for arrange*/

        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
