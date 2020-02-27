import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';


it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});