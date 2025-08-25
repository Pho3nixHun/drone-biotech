jest.mock('@angular/fire/auth', () => ({
    Auth: jest.fn(),
    onAuthStateChanged: jest.fn(),
}));
