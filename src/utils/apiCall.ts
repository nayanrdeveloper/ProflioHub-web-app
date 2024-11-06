import axiosInstance from '@/lib/axiosInstance';
import { AxiosResponse } from 'axios';

interface ApiCallProps {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: object;
    params?: object;
    headers?: object;
    isRawResponse?: boolean;
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

export async function apiCall<T>({
    url,
    method = 'GET',
    data,
    params,
    headers,
    isRawResponse = false, // Default to false for backward compatibility
}: ApiCallProps): Promise<T | ApiResponse<T> | AxiosResponse<ApiResponse<T>>> {
    try {
        const response = await axiosInstance.request<ApiResponse<T>>({
            url,
            method,
            data,
            params,
            headers,
        });

        // Return based on isRawResponse option
        if (isRawResponse) {
            return response; // Return full response object
        } else if (response.data && response.data.data !== undefined) {
            return response.data.data; // Return nested data object if available
        } else {
            return response.data; // Return data object if no nested data
        }
    } catch (error) {
        throw error; // Error is handled by Axios interceptor, so we rethrow
    }
}
