import { Order } from './order.service.model';

export const order: Order = {
    id: 'B-78901',
    status: 'active',
    client: {
        client: 'Westbrook Agricultural Holdings',
        contact: 'Sarah Johnson',
        email: 's.johnson@westbrook-ag.com',
        phone: '(555) 789-1234',
        address: '450 Farm Road, Westbrook County',
    },
    summary: {
        treatment: 'Seasonal Pest Control',
        averageDose: 2.5,
        totalSupply: 868.75,
        orderValue: 34750.0,
    },
    createdDate: new Date('2025-03-28'),
    totalArea: 347.5,
    missions: [
        {
            id: 'A-12345',
            fieldName: 'North Field',
            areaInHa: 45.8,
            scheduledDate: new Date('2025-04-05'),
            status: 'scheduled',
        },
        {
            id: 'A-12346',
            fieldName: 'South Field',
            areaInHa: 78.3,
            scheduledDate: new Date('2025-04-07'),
            status: 'preparing',
        },
        {
            id: 'A-12347',
            fieldName: 'East Meadow',
            areaInHa: 102.4,
            scheduledDate: new Date('2025-04-10'),
            status: 'scheduled',
        },
        {
            id: 'A-12348',
            fieldName: 'West Orchard',
            areaInHa: 56.2,
            scheduledDate: new Date('2025-04-02'),
            status: 'completed',
        },
        {
            id: 'A-12349',
            fieldName: 'Central Vineyard',
            areaInHa: 64.8,
            scheduledDate: new Date('2025-03-30'),
            status: 'completed',
        },
    ],
    messages: [
        {
            sender: 'Client - Sarah Johnson',
            sendingDate: new Date('2025-04-05T09:15:00'),
            message:
                'Please update me on the status of the East Meadow mission. Do we need to prepare access to any additional areas?',
        },
        {
            sender: 'Operations Manager',
            sendingDate: new Date('2025-04-05T11:30:00'),
            message:
                "East Meadow mission is scheduled for April 10th. All preparations are on track. We'll need the eastern gate unlocked for equipment access. The West Orchard and Central Vineyard missions were completed successfully.",
        },
        {
            sender: 'Client - Sarah Johnson',
            sendingDate: new Date('2025-04-05T13:45:00'),
            message:
                "Thank you for the update. I've arranged for the eastern gate to be unlocked on the 10th. Please share the completion reports for the West Orchard and Central Vineyard missions when available.",
        },
    ],
};
