const mvcArray = () =>
    jest.fn().mockImplementation((items = []) => ({
        push: jest.fn(),
        clear: jest.fn(),
        removeAt: jest.fn(),
        addListener: jest.fn(),
        getArray: jest.fn(() => items),
        getAt: jest.fn((i) => items[i]),
        getLength: jest.fn(() => items.length),
        forEach: jest.fn((cb) => items.forEach(cb)),
    }));

const singleControl = mvcArray()();
const mockPath = mvcArray()([]);

global.google = {
    maps: {
        importLibrary: jest.fn(),

        Map: jest.fn(() => {
            const controlsProxy = new Proxy([], {
                get(target, prop) {
                    if (!isNaN(prop)) {
                        return singleControl;
                    }
                    return target[prop];
                },
            });

            return {
                addListener: jest.fn(),
                setCenter: jest.fn(),
                fitBounds: jest.fn(),
                setZoom: jest.fn(),
                setOptions: jest.fn(),
                controls: controlsProxy,
            };
        }),

        drawing: {
            DrawingManager: jest.fn(() => ({
                setMap: jest.fn(),
            })),
        },
        event: {
            addListener: jest.fn(),
        },
        Polygon: jest.fn(() => ({
            getPath: jest.fn(() => mockPath),
            setOptions: jest.fn(),
            addListener: jest.fn(),
        })),
        Geocoder: jest.fn(() => ({
            geocode: jest.fn(),
        })),
        InfoWindow: jest.fn(() => ({
            open: jest.fn(),
            close: jest.fn(),
            setOptions: jest.fn(),
        })),
        ControlPosition: {
            TOP_RIGHT: 2,
            TOP_LEFT: 1,
            LEFT_BOTTOM: 3,
        },
        MVCArray: mvcArray(),
        OverlayView: jest.fn(),
        places: {
            PlaceAutocompleteElement: jest.fn(() => ({
                style: { margin: '' }, // make sure style exists
                removeEventListener: jest.fn(),
                addEventListener: jest.fn(),
            })),
        },
        marker: {
            AdvancedMarkerElement: jest.fn(() => ({
                removeEventListener: jest.fn(),
                addListener: jest.fn(),
            })),
        },
        LatLngBounds: jest.fn(() => {
            const bounds = {
                extend: jest.fn(function () {
                    return bounds;
                }),
            };
            return bounds;
        }),
    },
};
