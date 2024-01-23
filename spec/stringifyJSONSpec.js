// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  stringifiableObjects.forEach(function(test) {
    it('should match the result of calling JSON.stringify', function() {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });
  });

  unstringifiableValues.forEach(function(obj) {
    it('should match the result of calling JSON.stringify', function() {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });
  });
});
