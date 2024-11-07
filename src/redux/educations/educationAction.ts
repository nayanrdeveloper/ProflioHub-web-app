import { apiCall } from '@/utils/apiCall';
import { AppDispatch } from '../store';
import { setError, setLoading, setEducations } from './educationSlice';

export const fetchEducations = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
        const response = (await apiCall({
            url: '/todos/1',
            method: 'GET',
        })) as { data: any };
        console.log(response.data);
        const educationSampled = [
            {
                id: 1,
                name: 'University of Lagos',
                degree: 'BSc Computer Science',
            },
        ];
        dispatch(setEducations(educationSampled));
    } catch (error: any) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};