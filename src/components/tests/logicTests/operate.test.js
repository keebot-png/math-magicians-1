import operate from '../../../logic/operate';

describe('testing operate function', () => {
  const numberOne = 50;
  const numberTwo = 10;
  let operation;

  test('Check correct addition calculation', () => {
    operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('60');
  });

  test('Check correct subtraction calculation', () => {
    operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('40');
  });

  test('Check correct multiplication calculation', () => {
    operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('500');
  });

  test('Check correct division calculation', () => {
    operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toStrictEqual('5');
  });
});