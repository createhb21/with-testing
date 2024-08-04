import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';

import { ROUTER } from '@/constants/router';
import { AuthApi, authAtom } from '@/libs/features/auth';

export function useSignin() {
  const router = useRouter();
  const setToken = useSetAtom(authAtom);

  return useMutation(AuthApi.signin, {
    onSuccess(data) {
      setToken(data.data.payload);
      const path = data.data.payload.isRequiredSignUp ? ROUTER.AUTH.SIGNUP : ROUTER.HOME;
      router.replace(path);
    },
    onError() {
      router.replace(ROUTER.HOME);
    },
  });
}

export function useSignup() {
  const router = useRouter();
  const setToken = useSetAtom(authAtom);

  return useMutation(AuthApi.signup, {
    onSuccess(data) {
      setToken(data.data.payload);
      router.replace(ROUTER.HOME);
    },
  });
}

export function useRefreshToken() {
  const setToken = useSetAtom(authAtom);

  return useMutation(AuthApi.refreshToken, {
    onSuccess(data) {
      setToken(data.data.payload);
    },
    onError(err) {
      if (err instanceof AxiosError && err.response?.data.code === '312') {
        setToken(null);
      }
    },
  });
}
