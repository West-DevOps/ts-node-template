import { logger } from '../src/logging';

describe('test logger', () => {
  it('Should get a single transport from consoleLogger', () => {
    expect(logger.transports.length).toBe(1);
  });
});
