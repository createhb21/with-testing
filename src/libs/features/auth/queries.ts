import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { useAppDispatch } from '@/libs/redux/store';
import { AuthApi, setToken } from '.';

export function useSignin() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(AuthApi.signin, {
    onSuccess(data) {
      dispatch(setToken(data.data.payload));
      const path = data.data.payload.isRequiredSignUp ? '/signup' : '/';
      router.replace(path);
    },
    onError() {
      router.replace('/');
    },
  });
}

export function useSignup() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(AuthApi.signup, {
    onSuccess(data) {
      dispatch(setToken(data.data.payload));
      router.push('/');
    },
  });
}

export function useRefreshToken() {
  const dispatch = useAppDispatch();
  return useMutation(AuthApi.refreshToken, {
    onSuccess(data) {
      dispatch(setToken(data.data.payload));
    },
    onError(err) {
      if (err instanceof AxiosError && err.response?.data.code === '312') {
        dispatch(setToken(null));
      }
    },
  });
}
