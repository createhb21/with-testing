import { ROUTER } from '@/constants/router';
import type { NavigationItemType } from './navigation.type';

export const NAVIGATION: NavigationItemType[] = [
  {
    key: 'Home',
    path: ROUTER.HOME,
  },
  {
    key: 'SignUp',
    path: ROUTER.AUTH.SIGNUP,
  },
];
