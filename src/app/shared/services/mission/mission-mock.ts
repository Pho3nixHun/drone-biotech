import { Order } from '@services/order/order.service.model';

export const orders: Order[] = [
    {
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
        creationDate: new Date('2025-03-28'),
        totalAreaInHa: 347.5,
        moneyValue: 34750,
        missions: [
            {
                id: 'A-12345',
                pilot: null,
                fieldName: 'North Field',
                areaInHa: 45.8,
                scheduledDate: new Date('2025-04-05'),
                status: 'scheduled',
            },
            {
                id: 'A-12346',
                pilot: 'Alex Rodriguez',
                fieldName: 'South Field',
                areaInHa: 78.3,
                scheduledDate: new Date('2025-04-07'),
                status: 'preparing',
            },
            {
                id: 'A-12347',
                pilot: null,
                fieldName: 'East Meadow',
                areaInHa: 102.4,
                scheduledDate: new Date('2025-04-10'),
                status: 'scheduled',
            },
            {
                id: 'A-12348',
                pilot: 'Alex Rodriguez',
                fieldName: 'West Orchard',
                areaInHa: 56.2,
                completionDate: new Date('2025-04-02'),
                performance: 'good',
            },
            {
                id: 'A-12349',
                pilot: 'Alex Rodriguez',
                fieldName: 'Central Vineyard',
                areaInHa: 64.8,
                completionDate: new Date('2025-03-30'),
                performance: 'excellent',
            },
            {
                id: 'A-12350',
                pilot: 'Alex Rodriguez',
                fieldName: 'Upper Hill',
                areaInHa: 25.0,
                scheduledDate: new Date('2025-04-12'),
                status: 'pending',
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
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-04-06T08:20:00'),
                message:
                    'Noted. Reports are being finalized and will be shared by tomorrow. Also, confirming Upper Hill mission planned for April 12—please ensure road access is cleared.',
            },
            {
                sender: 'Client - Sarah Johnson',
                sendingDate: new Date('2025-04-06T09:00:00'),
                message:
                    'Understood. Road access to Upper Hill will be cleared by April 11th. Please notify if weather conditions affect scheduling.',
            },
        ],
    },
    {
        id: 'B-78902',
        status: 'completed',
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
        creationDate: new Date('2025-02-15'),
        totalAreaInHa: 125.8,
        moneyValue: 12580,
        missions: [
            {
                id: 'A-12220',
                pilot: 'John D.',
                fieldName: 'North Slope',
                areaInHa: 60.3,
                completionDate: new Date('2025-02-20'),
                performance: 'excellent',
            },
            {
                id: 'A-12221',
                pilot: 'Alex Rodriguez',
                fieldName: 'Southern Range',
                areaInHa: 65.5,
                completionDate: new Date('2025-02-22'),
                performance: 'good',
            },
        ],
        messages: [
            {
                sender: 'Client - Sarah Johnson',
                sendingDate: new Date('2025-02-25T10:00:00'),
                message:
                    'Thanks for the timely completion. Please confirm that all equipment was sanitized post-application.',
            },
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-02-25T12:15:00'),
                message:
                    'Yes, all equipment was cleaned and sanitized following protocol. Certificates have been emailed.',
            },
        ],
    },
    {
        id: 'B-78903',
        creationDate: new Date('2025-04-05'),
        totalAreaInHa: 89.2,
        status: 'pending',
        moneyValue: 8920,
        client: {
            client: 'Sunrise Agriculture',
            contact: 'Mike Thompson',
            email: 'mike.thompson@sunagri.org',
            phone: '(555) 234-5678',
            address: '88 Sunrise Road, Golden Valley',
        },
        summary: {
            treatment: 'Soil Fertilization',
            averageDose: 2.0,
            totalSupply: 178.4,
            orderValue: 8920.0,
        },
        missions: [
            {
                id: 'A-12400',
                pilot: null,
                fieldName: 'Golden Ridge',
                areaInHa: 48.5,
                scheduledDate: new Date('2025-04-15'),
                status: 'pending',
            },
        ],
        messages: [
            {
                sender: 'Client - Mike Thompson',
                sendingDate: new Date('2025-04-06T08:30:00'),
                message:
                    'Can you confirm if Golden Ridge is suitable for drone application or do we need ground support?',
            },
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-04-06T09:10:00'),
                message:
                    'Initial assessment indicates drone application is feasible. We’ll conduct a final site review by April 10.',
            },
        ],
    },
    {
        id: 'B-78904',
        creationDate: new Date('2025-04-08'),
        totalAreaInHa: 234.7,
        status: 'active',
        moneyValue: 23470,
        client: {
            client: 'Martinez Orchards',
            contact: 'Lisa Martinez',
            email: 'lisa.m@martinezorchards.com',
            phone: '(555) 678-9012',
            address: '210 Orchard Lane, Berryville',
        },
        summary: {
            treatment: 'Fruit Tree Nutrient Boost',
            averageDose: 1.5,
            totalSupply: 352.05,
            orderValue: 23470.0,
        },
        missions: [
            {
                id: 'A-12501',
                pilot: 'Alex Rodriguez',
                fieldName: 'Cherry Hill Block A',
                areaInHa: 112.0,
                scheduledDate: new Date('2025-04-15'),
                status: 'preparing',
            },
        ],
        messages: [
            {
                sender: 'Client - Lisa Martinez',
                sendingDate: new Date('2025-04-09T07:40:00'),
                message:
                    'We’ve had recent rainfall in Block A. Will that delay the Cherry Hill mission?',
            },
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-04-09T08:20:00'),
                message:
                    'Weather is being monitored. If drying conditions persist, we expect no delay. Final decision will be made April 13.',
            },
        ],
    },
];

export const mockOrdersTwo: Order[] = [
    {
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
        creationDate: new Date('2025-03-28'),
        totalAreaInHa: 347.5,
        moneyValue: 34750,
        missions: [
            {
                id: 'A-12345',
                pilot: null,
                fieldName: 'North Field',
                areaInHa: 45.8,
                scheduledDate: new Date('2025-04-05'),
                status: 'scheduled',
            },
            {
                id: 'A-12346',
                pilot: 'Alex Rodriguez',
                fieldName: 'South Field',
                areaInHa: 78.3,
                scheduledDate: new Date('2025-04-07'),
                status: 'preparing',
            },
            {
                id: 'A-12347',
                pilot: null,
                fieldName: 'East Meadow',
                areaInHa: 102.4,
                scheduledDate: new Date('2025-04-10'),
                status: 'scheduled',
            },
            {
                id: 'A-12348',
                pilot: 'Alex Rodriguez',
                fieldName: 'West Orchard',
                areaInHa: 56.2,
                completionDate: new Date('2025-04-02'),
                performance: 'good',
            },
            {
                id: 'A-12349',
                pilot: 'Alex Rodriguez',
                fieldName: 'Central Vineyard',
                areaInHa: 64.8,
                completionDate: new Date('2025-03-30'),
                performance: 'excellent',
            },
            {
                id: 'A-12350',
                pilot: 'Alex Rodriguez',
                fieldName: 'Upper Hill',
                areaInHa: 25.0,
                scheduledDate: new Date('2025-04-12'),
                status: 'pending',
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
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-04-06T08:20:00'),
                message:
                    'Noted. Reports are being finalized and will be shared by tomorrow. Also, confirming Upper Hill mission planned for April 12—please ensure road access is cleared.',
            },
            {
                sender: 'Client - Sarah Johnson',
                sendingDate: new Date('2025-04-06T09:00:00'),
                message:
                    'Understood. Road access to Upper Hill will be cleared by April 11th. Please notify if weather conditions affect scheduling.',
            },
        ],
    },
    {
        id: 'B-78902',
        status: 'completed',
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
        creationDate: new Date('2025-02-15'),
        totalAreaInHa: 125.8,
        moneyValue: 12580,
        missions: [
            {
                id: 'A-12220',
                pilot: 'John D.',
                fieldName: 'North Slope',
                areaInHa: 60.3,
                completionDate: new Date('2025-02-20'),
                performance: 'excellent',
            },
            {
                id: 'A-12221',
                pilot: 'Alex Rodriguez',
                fieldName: 'Southern Range',
                areaInHa: 65.5,
                completionDate: new Date('2025-02-22'),
                performance: 'good',
            },
        ],
        messages: [
            {
                sender: 'Client - Sarah Johnson',
                sendingDate: new Date('2025-02-25T10:00:00'),
                message:
                    'Thanks for the timely completion. Please confirm that all equipment was sanitized post-application.',
            },
            {
                sender: 'Operations Manager',
                sendingDate: new Date('2025-02-25T12:15:00'),
                message:
                    'Yes, all equipment was cleaned and sanitized following protocol. Certificates have been emailed.',
            },
        ],
    },
];
