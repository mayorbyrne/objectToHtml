import O2H from '../app';

describe('testing app file', () => {
  test('first test', () => {
    expect(new O2H()).toEqual({});
  });
});

describe('sttong', () => {
  test('empty string', () => {
    expect(new O2H().strong('')).toEqual('<strong></strong>');
  });

  test('string', () => {
    expect(new O2H().strong('test')).toEqual('<strong>test</strong>');
  });
});

describe('getHtmlFromArray', () => {
  test('empty array', () => {
    expect(new O2H().getHtmlFromArray([])).toEqual('<ul>[]</ul>');
  });

  test('array', () => {
    expect(new O2H().getHtmlFromArray([1, 2, 3])).toEqual('<ul><li>1<li>2<li>3</ul>');
  });
});

describe('getHtmlFromObject', () => {
  test('empty object', () => {
    expect(new O2H().getHtmlFromObject({})).toEqual('<ul></ul>');
  });

  test('object', () => {
    expect(new O2H().getHtmlFromObject({ a: 1, b: 2, c: 3 })).toEqual('<ul><li><strong>a</strong>: 1<br/><li><strong>b</strong>: 2<br/><li><strong>c</strong>: 3<br/></ul>');
  });
});