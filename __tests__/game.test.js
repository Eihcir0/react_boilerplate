import renderer from 'react-test-renderer';
import React from 'react';
import App from './../components/app.jsx';

test('App renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('1 + 1 = 2', () => {
  expect((1+1)).toEqual(2);
});
