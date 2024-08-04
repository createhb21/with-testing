import { atomWithStorage } from 'jotai/utils';
import type { SingupResponseType } from './types';

export const authAtom = atomWithStorage<SingupResponseType | null>('auth', null);
