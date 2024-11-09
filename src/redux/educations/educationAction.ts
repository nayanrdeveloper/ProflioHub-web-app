import { apiCall } from '@/utils/apiCall';
import { AppDispatch } from '../store';
import { setError, setLoading, setEducations } from './educationSlice';

export const fetchEducations = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = (await apiCall({
            url: '/todos/1',
            method: 'GET',
        })) as { data: { id: number; name: string; degree: string }[] };
        console.log(response.data);
        const educationSampled = [
            {
                id: 1,
                name: 'University of Lagos',
                degree: 'BSc Computer Science',
            },
        ];
        dispatch(setEducations(educationSampled));
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(setError(error.message));
        } else {
            dispatch(setError('An unknown error occurred'));
        }
    } finally {
        dispatch(setLoading(false));
    }
};
