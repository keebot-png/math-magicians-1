import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../navbarHeading/navbar';

describe('Testing the links in the navbar', () => {
  test('Testing to show that all links are displaying correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    expect(screen.getAllByText('Home')).toMatchSnapshot();
    expect(screen.getAllByText('Calculator')).toMatchSnapshot();
    expect(screen.getAllByText('Quote')).toMatchSnapshot();
  });

  test('Test for navigating to Home Page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Home'));

    expect(screen.getByText('Home')).toMatchInlineSnapshot(`
<a
  href="/"
>
  Home
</a>
`);
  });

  test('Test for navigating to Calculator page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
<a
  href="/calculator"
>
  Calculator
</a>
`);
  });

  test('Test for navigating to the Quote page', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );

    fireEvent.click(screen.getByText('Quote'));

    expect(screen.getByText('Quote')).toMatchInlineSnapshot(`
<a
  href="/quote"
>
  Quote
</a>
`);
  });
});
