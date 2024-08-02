import type { Show } from '@/libs/features/shows/types';

export interface Reservation {
  id: number;
  showId: number;
  userId: number;
  seatCount: number;
}

export interface ReservationWithShow extends Reservation {
  show: Show;
}
