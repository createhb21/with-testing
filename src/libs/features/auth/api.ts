import { axiosInstance, routes } from '@/libs/axios';
import { ISignUpParams, ISocialSignInParams, IRefreshTokenParams } from './types';

const signout = () => axiosInstance.post(`${routes.auth}/sign-out`);

const signin = (data: ISocialSignInParams) => axiosInstance.post(`${routes.auth}/social-sign-in`, data);

const signup = (data: ISignUpParams) => axiosInstance.post(`${routes.auth}/sign-up`, data);

const refreshToken = (data: IRefreshTokenParams) => axiosInstance.post(`${routes.auth}/tokens`, data);

const withdraw = () => axiosInstance.delete(`${routes.auth}/withdraw`);

export { signout, signin, signup, refreshToken, withdraw };
