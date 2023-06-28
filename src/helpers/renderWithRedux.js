import React from 'react'
import setupStore from '../store/store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { Router } from '../router/router'
import { render } from '@testing-library/react'

export const renderWithRedux = (component, route = '/') => {
  const store = setupStore()
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <Router />
        {component}
      </MemoryRouter>
    </Provider>
  )
}
