import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';

test('Jest snapshot to test components', () => {
  const component = renderer.create(
    <Router>
      <App />
    </Router>,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});