import { MapsConfigVM } from '@services/maps-config/maps-config-vm.model';

export interface MapsXVM {
    deleteControlButtonText: string;
    submitButtonTitleKey: string;
    mapOptions: google.maps.MapOptions;
}

export type MapsXVMWithConfig = MapsXVM & MapsConfigVM;
