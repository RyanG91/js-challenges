const commonCharacters = (string1, string2) => {
  let result = ''
  string1.split('').forEach(letter => {
    if (string2.indexOf(letter) > -1 && letter !== ' ' && result.indexOf(letter) === -1) {
      result += letter
    }
  })
  return result
}

// Your Code Should Pass:
const chai = require('chai');
const should = chai.should();

describe('Common Characters', function(){
  it('returns common characters', function(){
    commonCharacters('abc', 'abc').should.equal('abc');
  });

  it('returns common characters', function(){
    commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe');
  });

  it('returns common characters', function(){
    commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash');
  });

  it('returns empty string', function(){
    commonCharacters('', 'No more').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('No more', '').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('', '').should.equal('')
  });
});
