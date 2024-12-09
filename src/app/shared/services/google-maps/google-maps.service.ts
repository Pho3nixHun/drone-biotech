import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GoogleMapsService {
    private map: google.maps.Map | null = null;
    private drawingManager: google.maps.drawing.DrawingManager | null = null;
    private createdPolygon: google.maps.Polygon | null = null;

    // Initialize map with the options and add Drawing Manager
    initializeMap(
        mapCanvas: HTMLElement,
        mapOptions: google.maps.MapOptions,
        drawingControlOptions: google.maps.drawing.DrawingControlOptions,
        polygonOptions: google.maps.PolygonOptions,
        onPolygonComplete: (coordinates: google.maps.LatLngLiteral[]) => void
    ): google.maps.Map {
        this.map = new google.maps.Map(mapCanvas, mapOptions);

        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingControlOptions,
            polygonOptions,
        });

        this.attachDrawingManagerListener(onPolygonComplete);

        this.drawingManager.setMap(this.map);

        return this.map;
    }

    // Listener for Drawing Manager (when the polygon is created)
    private attachDrawingManagerListener(
        onPolygonComplete: (coordinates: google.maps.LatLngLiteral[]) => void
    ) {
        if (!this.drawingManager) {
            return;
        }
        google.maps.event.addListener(
            this.drawingManager,
            'polygoncomplete',
            (polygon: google.maps.Polygon) => {
                // Cant draw another polygon when one is drawn on the screen
                this.drawingManager?.setDrawingMode(null);
                this.drawingManager?.setOptions({ drawingControl: false });

                this.createdPolygon = polygon;
                const coordinates = this.getPolygonCoordinates(polygon);
                onPolygonComplete(coordinates);

                this.attachPolygonListeners(polygon, onPolygonComplete);
            }
        );
    }

    // Attach listeners to the polygon
    private attachPolygonListeners(
        polygon: google.maps.Polygon,
        onUpdate: (coordinates: google.maps.LatLngLiteral[]) => void
    ): void {
        const path = polygon.getPath();

        const updateCoordinates = () => {
            const coordinates = this.getPolygonCoordinates(polygon);
            // Update the values of the form
            onUpdate(coordinates);
        };

        google.maps.event.addListener(path, 'insert_at', updateCoordinates);
        google.maps.event.addListener(path, 'set_at', updateCoordinates);
        google.maps.event.addListener(path, 'remove_at', updateCoordinates);
    }

    // Delete polygon from the map
    public deletePolygon(onPolygonDeleted: () => void): void {
        if (this.createdPolygon) {
            this.createdPolygon.setMap(null);
            this.createdPolygon = null;

            //When the polygon is deleted, the drawing is enabled
            this.drawingManager?.setDrawingMode(
                google.maps.drawing.OverlayType.POLYGON
            );
            this.drawingManager?.setOptions({ drawingControl: true });

            onPolygonDeleted();
        }
    }

    // Get the coordinate of the polygon
    private getPolygonCoordinates(
        polygon: google.maps.Polygon
    ): google.maps.LatLngLiteral[] {
        const path = polygon.getPath();
        const coordinates: google.maps.LatLngLiteral[] = [];

        for (let i = 0; i < path.getLength(); i++) {
            const latLng = path.getAt(i);
            coordinates.push({ lat: latLng.lat(), lng: latLng.lng() });
        }

        return coordinates;
    }
}
