import React from 'react';
import { render, fireEvent, queryByDisplayValue } from "@testing-library/react";
import NewTodoForm from './NewTodoForm';


it('renders without crashing', () => {
  render(<NewTodoForm />);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('updates user inputs in form value', () => {
  const {queryByText, queryByLabelText, queryByDisplayValue } = render(<NewTodoForm addTodo={() => {}}/>);

  let task = queryByLabelText("New Task:");
  let addBtn = queryByText("Add!");

  fireEvent.change(task, {target: {value: "Task 1"}});

  expect(queryByDisplayValue("Task 1")).toBeInTheDocument();

  fireEvent.click(addBtn);
  expect(queryByDisplayValue("Task 1")).not.toBeInTheDocument();
});