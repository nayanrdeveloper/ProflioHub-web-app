import { apiCall } from '@/utils/apiCall';
import { AppDispatch } from '../store';
import { setError, setLoading, setUser } from './authSlice';

interface ApiResponse<T> {
    data: T;
}

export const loginUser =
    (email: string, password: string) => async (dispatch: AppDispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiCall<{
                token: string;
                user: {
                    id: string;
                    email: string;
                    firstName: string;
                    lastName: string;
                };
            }>({
                url: '/login',
                method: 'POST',
                data: { email, password },
            });

            const { token, user } =
                'data' in response
                    ? (
                          response as ApiResponse<{
                              token: string;
                              user: {
                                  id: string;
                                  email: string;
                                  firstName: string;
                                  lastName: string;
                              };
                          }>
                      ).data
                    : response;

            // Store token in localStorage
            localStorage.setItem('token', token);
            document.cookie = `token=${token}; path=/;`;

            // Set user in Redux state
            dispatch(setUser(user));

            // Navigate to the dashboard (redirect can be handled in component)
        } catch (error: unknown) {
            if (error instanceof Error) {
                dispatch(setError(error.message || 'An error occurred'));
            } else {
                dispatch(setError('An error occurred'));
            }
        } finally {
            dispatch(setLoading(false));
        }
    };
