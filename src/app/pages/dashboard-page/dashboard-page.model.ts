import { ValueVM } from '@components/value/value.model';
import { WithTitle } from '@interfaces/with-title.interface';

interface UserHeaderXVM {
    type: 'customer' | 'office' | 'pilot';
    title: ValueVM;
    role: ValueVM;
    lastLoginDateTextKey: string;
    lastLoginDate: ValueVM;
}

interface SummaryItemXVM extends WithTitle {
    type: 'blue' | 'green' | 'yellow' | 'purple';
    valueVM: ValueVM;
    emoji: string;
}
interface SummaryItemListXVM {
    summaryItemXVMs: SummaryItemXVM[];
}

export interface DashboardPageVM {
    userHeaderXVM: UserHeaderXVM;
    summaryItemListXVM: SummaryItemListXVM;
}
