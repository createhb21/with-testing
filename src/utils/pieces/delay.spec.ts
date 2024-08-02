import { delay } from './delay';

describe('delay', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should return a promise which is resolved after given milliseconds', async () => {
    const DELAYING_TIME = 3000;
    const promise = delay(DELAYING_TIME);

    jest.advanceTimersByTime(DELAYING_TIME);

    await expect(promise).resolves.toBeUndefined();
  });
});
