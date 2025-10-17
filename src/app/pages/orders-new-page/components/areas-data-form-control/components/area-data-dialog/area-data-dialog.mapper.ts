import { Coordinates } from '@stores/location/location.model';

export const mapCoordinatesArrayToString = (coords: Coordinates[]): string =>
    coords.map(mapCoordinatesToString).join('\n');

export const mapStringToCoordinatesArray = (str: string): Coordinates[] =>
    str
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .map(mapStringToCoordinates);

export const mapStringToCoordinates = (str: string): Coordinates => {
    const [lat, lng] = str.trim().split(/\s+/).map(Number);
    return { lat, lng };
};

export const mapCoordinatesToString = (coordinates: Coordinates): string =>
    `${coordinates.lat} ${coordinates.lng}`;
