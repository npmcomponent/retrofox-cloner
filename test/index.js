var clone = require('../');

describe('clone(array)', function(){
  it('dumb natural test', function(){
    var a = [1, 2, 3, 4];
    var b = a;
    b.shift();

    b.should.be.eql(a);
  });

  it('should be not equal to cloned array', function(){
    var a = [1, 2, 3, null, ['a', 'b', false]];
    var b = clone(a);
    b.shift();

    b.should.not.eql(a);
  });

  it('should be equal to cloned array', function(){
    var a = [1, 2, 3, null, ['a', 'b', false]];
    var b = clone(a);
    a.shift();
    b.shift();

    b.should.be.eql(a);
  });

  it('should be equal to `instance of` cloned array', function(){
    var a = [1, 2, 3, null, ['a', 'b', false]];
    var b = clone(a);
    (a instanceof Array).should.be.eql(b instanceof Array);
  });
});

describe('clone(object)', function(){
  it('dumb natural test', function(){
    var a = { cat: 'Lola', dog: 'Tana', mouse: null };
    var b = a;
    b.cat = 'Ponyo';

    b.should.be.eql(a);
  });

  it('should be not equal to cloned object', function(){
    var a = { cat: 'Lola', dog: 'Tana', mouse: null };
    var b = clone(a);
    b.cat = 'Ponyo';

    b.should.not.eql(a);
  });

  it('should be equal to cloned object', function(){
    var a = { cat: 'Lola', dog: 'Tana', mouse: null };
    var b = clone(a);
    a.cat = 'Ponyo';
    b.cat = 'Ponyo';

    b.should.be.eql(a);
  });

  it('should be equal to `instance of` cloned object', function(){
    var a = { cat: 'Lola', dog: 'Tana', mouse: null };
    var b = clone(a);

    (a instanceof Array).should.be.eql(b instanceof Array);
  });
});
