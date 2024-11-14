import { Injectable, Signal, signal } from '@angular/core';
import { notFoundPageVMDefault } from './not-found-page.mock';
import { NotFoundPageVM } from './not-found-page-vm.model';
import { NotFoundPageServiceModel } from './not-found-page.service.model';

@Injectable({
  providedIn: 'root',
})
export class NotFoundPageService implements NotFoundPageServiceModel {
  public getVM(): Signal<NotFoundPageVM> {
    return signal(notFoundPageVMDefault);
  }
}
