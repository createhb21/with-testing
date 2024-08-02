import type { Band } from '@/libs/features/bands/types';

export interface ShowWithoutAvailableSeatCount {
  id: number;
  band: Band;
  scheduledAt: Date;
}

export interface availableSeatCount {
  availableSeatCount: number;
}

export interface Show
  extends ShowWithoutAvailableSeatCount,
  availableSeatCount {}
