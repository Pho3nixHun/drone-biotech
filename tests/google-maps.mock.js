global.google = {
    maps: {
        importLibrary: jest.fn(),

        Map: jest.fn(() => ({
            setCenter: jest.fn(),
            setZoom: jest.fn(),
            setOptions: jest.fn()
        })),
        drawing: {
            DrawingManager: jest.fn(() => ({
                setMap: jest.fn(),
            })),
        },
        event: {
            addListener: jest.fn(),
        },
        Polygon: jest.fn(() => ({
            getPath: jest.fn(),
        })),
        Geocoder: jest.fn(() => ({
            geocode: jest.fn(),
        })),
        InfoWindow: jest.fn(() => ({
            open: jest.fn(),
            close: jest.fn(),
        })),
        ControlPosition: jest.fn(() => ({
            TOP_RIGHT: jest.fn(),
        })),
        MVCArray: jest.fn().mockImplementation((items = []) => {
            return {
                getArray: jest.fn(() => items),
                getAt: jest.fn((i) => items[i]),
                getLength: jest.fn(() => items.length),
                forEach: jest.fn((cb) => items.forEach(cb)),
            };
        }),
    },
};
