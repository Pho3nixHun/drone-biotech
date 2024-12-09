global.google = {
    maps: {
        importLibrary: jest.fn(),

        Map: jest.fn(() => ({
            setCenter: jest.fn(),
            setZoom: jest.fn(),
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
    },
};
