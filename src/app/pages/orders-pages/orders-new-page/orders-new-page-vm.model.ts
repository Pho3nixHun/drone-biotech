import { FrameVM } from '@components/frame/frame-vm';
import { MapsXVM, MapsXVMWithConfig } from '@components/maps/maps-vm.model';

export interface OrdersNewPageVM {
    frameXVM: FrameXVM;
}

export interface OrdersNewPageVMWithConfig {
    frameXVM: FrameXVMWithConfig;
}

export interface OrdersNewFrame extends FrameVM, MapsXVM {}
export interface OrdersNewFrameWithConfig extends FrameVM, MapsXVMWithConfig {}

type FrameXVM = OrdersNewFrame;
type FrameXVMWithConfig = OrdersNewFrameWithConfig;
