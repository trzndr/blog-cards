import { format } from 'date-fns';

export const formatDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date format');
        }
        return format(date, 'd MMMM yyyy');
    } catch (error) {
        console.error('Error formatting date:', error);
        return '<invalid date>';
    }
};
