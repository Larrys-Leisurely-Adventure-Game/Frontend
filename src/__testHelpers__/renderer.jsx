import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';

const rendererWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(<Router history={history}>{ui}</Router>),
    history
  };
};

export default rendererWithRouter;
