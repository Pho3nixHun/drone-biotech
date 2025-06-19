import { Mission } from './mission.service.model';

export const missions: Mission[] = [
    {
        id: 'A-12345',
        client: 'Westbrook Agricultural',
        fieldName: 'North Field',
        pilot: 'Alex Rodriguez',
        areaInHa: 45.8,

        scheduledDate: new Date(),
        status: 'scheduled',
    },
    {
        id: 'A-12346',
        client: 'Westbrook Agricultural',
        fieldName: 'South Field',
        pilot: 'Maria Santos',
        areaInHa: 78.3,

        scheduledDate: new Date(),
        status: 'preparing',
    },
    {
        id: 'A-12347',
        client: 'Westbrook Agricultural',
        fieldName: 'East Meadow',
        pilot: null,
        areaInHa: 102.4,

        scheduledDate: new Date(),
        status: 'pending',
    },
    {
        id: 'A-12348',
        client: 'Westbrook Agricultural',
        fieldName: 'West Orchard',
        pilot: 'Alex Rodriguez',
        areaInHa: 100,

        completionDate: new Date(),
        performance: 'excellent',
    },
    {
        id: 'A-12349',
        client: 'Westbrook Agricultural',
        fieldName: 'Central Vineyard',
        pilot: 'Maria Santos',
        areaInHa: 64.8,

        completionDate: new Date(),
        performance: 'good',
    },

    {
        id: 'A-12350',
        client: 'Westbrook Agricultural',
        fieldName: 'Valley Ridge',
        areaInHa: 67.3,
        pilot: 'Alex Rodriguez',

        scheduledDate: new Date(),
        status: 'preparing',
    },
];
