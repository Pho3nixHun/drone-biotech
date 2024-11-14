import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';
import { MessageVM } from './message-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { description: 'description' };
describe('MessageComponent', () => {
    let fixture: ComponentFixture<MessageComponent>;
    let compiled: HTMLElement;

    const vm: MessageVM = {
        title: '404!',
        descriptionKey: en.description,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MessageComponent,
                getTranslocoModule({
                    langs: { en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MessageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template when there is a VM provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
