import calculate from '../../../logic/calculate';

describe('testing calculate function', () => {
  test('AC button returns null', () => {
    const testObject = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonType = 'AC';

    expect(calculate(testObject, buttonType)).toStrictEqual(testObject);
  });

  test('Zero to input returns {}', () => {
    const testObject = {
      total: '0',
      next: '0',
      operation: null,
    };

    const buttonType = '0';

    expect(calculate(testObject, buttonType)).toStrictEqual({});
  });

  test('test +/- button', () => {
    const testObject = {
      total: 0,
      next: 100,
      operation: null,
    };

    const buttonType = '+/-';

    expect(calculate(testObject, buttonType)).toStrictEqual({ total: 0, next: '-100', operation: null });
  });

  test('Addition operator is adding correctly', () => {
    const testObject = {
      total: 75,
      next: 25,
      operation: '+',
    };

    const buttonType = '+';

    expect(calculate(testObject, buttonType)).toStrictEqual({ total: '100', next: null, operation: '+' });
  });

  test('Check minus operator is functioning correctly', () => {
    const testObject = {
      total: 75,
      next: 25,
      operation: '-',
    };

    const buttonType = '-';

    expect(calculate(testObject, buttonType)).toStrictEqual({ total: '50', next: null, operation: '-' });
  });

  test('Check multiplication function is working correctly', () => {
    const testObject = {
      total: 50,
      next: 10,
      operation: 'x',
    };

    const buttonType = 'x';

    expect(calculate(testObject, buttonType)).toStrictEqual({ total: '500', next: null, operation: 'x' });
  });

  test('Check if division operator functions correctly', () => {
    const testObject = {
      total: 75,
      next: 25,
      operation: '÷',
    };

    const buttonType = '÷';

    expect(calculate(testObject, buttonType)).toStrictEqual({ total: '3', next: null, operation: '÷' });
  });
});
