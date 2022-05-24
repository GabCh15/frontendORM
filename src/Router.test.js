import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { NavBar } from './Router'
import React from 'react'
import '@testing-library/jest-dom'


test('Verifies Navbar is working well', async () => {
  render(<NavBar/>)

  fireEvent.click(screen.getByText('Add Team'))

  expect(screen.getByRole('button')).toHaveAttribute("class",expect.stringContaining("active"))
})