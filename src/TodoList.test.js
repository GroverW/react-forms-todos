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

it('successfully adds task to list', () => {
  const { queryByText, queryByLabelText } = render(<TodoList />);

  createTask(queryByLabelText, queryByText);

  expect(queryByText("Test Task")).toBeInTheDocument();
  expect(queryByText("Delete")).toBeInTheDocument();
});

it('successfully removes task from list', () => {
  const { queryByText, queryByLabelText } = render(<TodoList />);

  createTask(queryByLabelText, queryByText);

  expect(queryByText("Test Task")).toBeInTheDocument();
  expect(queryByText("Delete")).toBeInTheDocument();

  const deleteBtn = queryByText("Delete");

  fireEvent.click(deleteBtn);
  expect(queryByText("Test Task")).not.toBeInTheDocument();
  expect(queryByText("Delete")).not.toBeInTheDocument();

});

function createTask(queryByLabelText, queryByText) {
  const taskInput = queryByLabelText("New Task:");
  const submitBtn = queryByText("Add!");

  fireEvent.change(taskInput, {target: {value: "Test Task"}});
  fireEvent.click(submitBtn);
}