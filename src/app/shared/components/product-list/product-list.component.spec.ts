import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { ProductItemVM } from '@components/product-item/product-item-vm.model';

const en = {
    title: 'Title',
    description: 'Description',
    altText: 'Butterfly',
};
@Component({
    template: `
        <app-product-list>
            <app-product-item [vm]="vm" />
            <app-product-item [vm]="vm" />
            <div>This should not been projected</div>
        </app-product-list>
    `,
})
class TestHostComponent {
    vm: ProductItemVM = {
        titleKey: 'title',
        descriptionKey: 'description',
        imageSrc: 'assets/lepke.jpg',
        altTextKey: 'altText',
    };
}
describe('ProductListComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ProductListComponent,
                ProductItemComponent,
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
    it('should render the template when the VM is provided and ignore other elements', () => {
        //Arrange
        /*No need for arrange*/

        //Act
        /*No need for act*/
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
