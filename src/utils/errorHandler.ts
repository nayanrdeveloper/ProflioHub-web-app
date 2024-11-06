import { AxiosError, isAxiosError } from 'axios';
import HTTP_STATUS from '@/constants/HttpStatusCodes';

export function handleApiError(error: unknown): void {
    if (isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
            const statusCode = axiosError.response.status;

            switch (statusCode) {
                case HTTP_STATUS.UNAUTHORIZED:
                    console.error(
                        'Unauthorized access - redirecting to login.'
                    );
                    // Add logout logic, redirect to login page, etc.
                    break;
                case HTTP_STATUS.NOT_FOUND:
                    console.error('Resource not found.');
                    break;
                case HTTP_STATUS.INTERNAL_SERVER_ERROR:
                    console.error('Internal server error.');
                    break;
                default:
                    console.error(
                        'API Call Error:',
                        axiosError.response.data || axiosError.message
                    );
            }
        } else {
            console.error('No response received:', axiosError.message);
        }
    } else {
        console.error('Unexpected Error:', error);
    }
}
