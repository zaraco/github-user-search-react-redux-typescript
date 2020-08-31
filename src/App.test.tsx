import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import initStore from "./redux/store";

test('renders user link', () => {
  const store = initStore();
  const { getByText } = render(<Provider store={store}><App/></Provider>);
  const linkElement = getByText(/user/i);
  expect(linkElement).toBeInTheDocument();
});
