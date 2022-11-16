import { render, screen } from '@testing-library/react';
import HomePage from '../../homePage/home';
import Calculator from '../../calculatorPage/calculator';
import Quotes from '../../quotePage/quote';

describe('Test React Page Components', () => {
  test('Test Home Page is rendered', () => {
    render(<HomePage />);

    expect(screen.getAllByText('Welcome to our page!')).toMatchSnapshot();
  });

  test('Test Calculator Page is rendered', () => {
    render(<Calculator />);

    expect(screen.findAllByTitle('Lets do some math!')).toMatchSnapshot();
  });

  test('Test Quote Page is rendered', () => {
    render(<Quotes />);

    expect(screen.findAllByTitle('Math Quote')).toMatchSnapshot();
  });
});
