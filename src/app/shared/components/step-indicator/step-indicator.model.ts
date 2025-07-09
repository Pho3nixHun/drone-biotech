export const mapStepIndicatorNumberToCSSStyle = (num: number): string => {
    return (
        {
            1: 'bg-blue-400',
            2: 'bg-green-400',
        }[num] || ''
    );
};
