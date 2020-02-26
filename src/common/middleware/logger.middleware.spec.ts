import { Logger } from './logger.middleware';

describe('Logger', () => {
  it('should be defined', () => {
    expect(new Logger()).toBeDefined();
  });
});
