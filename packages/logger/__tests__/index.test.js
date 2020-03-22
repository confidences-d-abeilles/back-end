/* eslint-disable no-console */
const { logError, logWarning, logSuccess, logDebug } = require('../index.js');


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

  describe('logSuccess', () => {
    it('should call console log', () => {
      logSuccess('test');
      return expect(console.log).toHaveBeenCalledTimes(1);
    });
  });

  describe('logDebug', () => {
    it('should call console log', () => {
      logDebug('test');
      return expect(console.log).toHaveBeenCalledTimes(1);
    });
  });
});
