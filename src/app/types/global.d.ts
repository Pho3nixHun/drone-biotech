import type { HSTabs } from 'flyonui/flyonui';

declare global {
    interface Window {
        HSTabs: typeof HSTabs;
    }
}

export {};
