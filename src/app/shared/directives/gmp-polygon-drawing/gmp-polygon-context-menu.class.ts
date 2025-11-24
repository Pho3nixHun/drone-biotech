import {
    signal,
    ComponentRef,
    EnvironmentInjector,
    ApplicationRef,
    createComponent,
    inputBinding,
    outputBinding,
} from '@angular/core';
import {
    PolygonContextMenuComponent,
    PolygonContextMenuEvent,
    PolygonContextMenuVM,
} from '@components/polygon-context-menu/polygon-context-menu.component';
import { isNull } from '@utils/is-null.typeguard';

export class PolygonContextMenu extends google.maps.OverlayView {
    private readonly containerDiv = document.createElement('div');
    private readonly position = signal<google.maps.LatLng | null>(null);
    private readonly vm = signal<PolygonContextMenuVM | null>(null);
    private readonly vertex = signal<number | null>(null);
    private readonly path =
        signal<google.maps.MVCArray<google.maps.LatLng> | null>(null);
    private readonly componentRef =
        signal<ComponentRef<PolygonContextMenuComponent> | null>(null);

    constructor(
        private readonly injector: EnvironmentInjector,
        private readonly appRef: ApplicationRef
    ) {
        super();
        this.containerDiv.style.position = 'absolute';
        this.containerDiv.style.marginLeft = '40px';
        this.containerDiv.style.marginTop = '-10px';
    }

    public open(
        map: google.maps.Map,
        path: google.maps.MVCArray<google.maps.LatLng>,
        vertex: number,
        vm: PolygonContextMenuVM
    ) {
        this.position.set(path.getAt(vertex));
        this.vertex.set(vertex);
        this.path.set(path);
        this.vm.set(vm);
        this.setMap(map);
        this.draw();
    }

    public override onRemove() {
        const ref = this.componentRef();
        if (ref) {
            this.appRef.detachView(ref.hostView);
            ref.destroy();
            this.componentRef.set(null);
        }
        this.containerDiv.remove();
    }

    public override draw() {
        const position = this.position();
        const projection = this.getProjection();
        if (!position || !projection) return;
        const point = projection.fromLatLngToDivPixel(position);
        if (!point) return;

        this.containerDiv.style.top = `${point.y}px`;
        this.containerDiv.style.left = `${point.x}px`;
    }

    public override onAdd() {
        const path = this.path();
        const map = this.getMap();
        const panes = this.getPanes();
        const ref = this.componentRef();
        const vertex = this.vertex();
        const vm = this.vm();
        if (
            !panes ||
            !(map instanceof google.maps.Map) ||
            ref ||
            !path ||
            isNull(vertex) ||
            !vm
        )
            return;

        const compRef = createComponent(PolygonContextMenuComponent, {
            environmentInjector: this.injector,
            hostElement: this.containerDiv,
            bindings: [
                inputBinding('vm', () => {
                    const { removeVertexButtonXVM } = vm;
                    const computedVM: PolygonContextMenuVM = {
                        ...vm,
                        removeVertexButtonXVM: {
                            ...removeVertexButtonXVM,
                            hidden: path.getLength() < 3,
                        },
                    };
                    return computedVM;
                }),

                outputBinding(
                    'polygonContextMenuEvent',
                    (event: PolygonContextMenuEvent) => {
                        if (event.type === 'close') return this.close();
                        if (event.type === 'remove') {
                            path.removeAt(vertex);
                        } else {
                            path.clear();
                        }
                        this.close();
                    }
                ),
            ],
        });

        panes.floatPane.appendChild(this.containerDiv);
        this.appRef.attachView(compRef.hostView);
        compRef.changeDetectorRef.detectChanges();
        this.componentRef.set(compRef);
    }

    public close() {
        this.setMap(null);
    }
}
