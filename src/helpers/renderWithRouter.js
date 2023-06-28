import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Router } from '../router/router'
import { render } from '@testing-library/react'

export const renderWithRouter = (component, inititalRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[inititalRoute]}>
      <Router />
      {component}
    </MemoryRouter>
  )
}
