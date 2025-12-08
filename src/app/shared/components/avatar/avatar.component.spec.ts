import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { AvatarVM } from './avatar.model';
import { TranslocoModule } from '@jsverse/transloco';
import { getTranslocoModule } from 'transloco-testing.module';

describe('AvatarComponent', () => {
    let fixture: ComponentFixture<AvatarComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AvatarComponent,
                TranslocoModule,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(AvatarComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template correctly with image', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {
            altTextKey: enMock.alText,
            type: 'withImage',
            imageSrc: 'image.jpg',
        } as AvatarVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template correctly with initials', () => {
        //Arrange
        fixture.componentRef.setInput('vm', {
            altTextKey: enMock.alText,
            type: 'withInitials',
            initials: 'JB',
        } as AvatarVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});

const enMock = {
    alText: 'imageAltText',
};
