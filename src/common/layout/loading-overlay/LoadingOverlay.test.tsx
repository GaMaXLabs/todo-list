import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import LoadingOverlay from './LoadingOverlay';
import { updateStatus } from '../../../features/todos/store/todosSlice';

test('if the state is loading the overlay should be active', () => {

  store.dispatch(updateStatus("loading"))
  const { getByTestId } = render(
    <Provider store={store}>
      <LoadingOverlay/>
    </Provider>
  );
  
  expect(getByTestId("circularIcon")).toBeInTheDocument();
});
