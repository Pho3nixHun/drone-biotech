import { Injectable, signal, Signal } from '@angular/core';
import { AppComponentVM } from './app-vm.model';
import { appMockVM } from './app.mock';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public getVM(): Signal<AppComponentVM | null> {
    return signal(appMockVM);
  }
}
