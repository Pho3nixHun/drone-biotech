import { Signal } from '@angular/core';
import { NotFoundPageVM } from './not-found-page-vm.model';

export abstract class NotFoundPageServiceModel {
    abstract getVM(): Signal<NotFoundPageVM | undefined>;
}
