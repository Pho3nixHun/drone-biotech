import { EntryPointXVM } from '@components/google-map/directives/draw-entry-points/draw-entry-points.model';
import { TargetAreaXVM } from '@components/google-map/directives/draw-target-areas/draw-target-areas.model';
import { GoogleMapVM } from '@components/google-map/google-map.model';

export interface MissionDetailsPageVM {
    googleMapXVM: GoogleMapXVM;
}

interface GoogleMapXVM extends GoogleMapVM {
    targetAreaXVMs: TargetAreaXVM[] | null;
    entryPointXVMs: EntryPointXVM[] | null;
}
