const { checkFields } = require('../request');

describe('request', () => {
  describe('checkFields', () => {
    const body: {
      tata: 'test',
      toto: 69,
      titi: ['a', 'm', 'a', 'z', 'i', 'n', 'g'],
    };

    it('should return false because some parameters are missing', () => {
      const requiredFields = ['tata', 'toto', 'titi', 'lot of fun'];
      expect(checkFields(body, requiredFields)).toBe(false);
    });

    it('should return true because parameters are present', () => {
      const requiredFields = ['tata', 'toto'];
      expect(checkFields(body, requiredFields)).toBe(true);
    });
  });
});
