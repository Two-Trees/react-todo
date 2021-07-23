import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';
import  { api } from './components/api.js'
// import Form from './components/Form.js'

const mockCreateItem = (api.createItem = jest.fn());

test('add items to list', async () => {
  
  const todoText = "wash car"; 
  mockCreateItem.mockResolvedValueOnce(todoText)
  const {getByText} = render(<App/>);
  
  const input = getByText("learn react"); 
  fireEvent.change(input, {target: {value: 'wash car'}});
  fireEvent.click(getByText('Add #1'));

  await wait (() => getByText(todoText)); 

  expect(mockCreateItem).toBeCalledTimes(1); 
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining('wash car')
  )
  
});
