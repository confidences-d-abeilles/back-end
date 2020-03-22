/* eslint-disable no-console */
const { logError, logWarning } = require('../index.js');


describe('logger', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  describe('logError', () => {
    it('should call console log', () => {
      logError('test');
      return expect(console.log).toHaveBeenCalledTimes(1);
    });
  });

  describe('logWarning', () => {
    it('should call console log', () => {
      logWarning('test');
      return expect(console.log).toHaveBeenCalledTimes(1);
    });
  });
});
