import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Router from './Router'
import '@testing-library/jest-dom'


test('Verifies Navbar is working well', async () => {
  render(<Router/>)

  fireEvent.click(screen.getByText('Add Team'))

  expect(screen.getAllByText('Add Team')[0]).toHaveAttribute("class",expect.stringContaining("nav-item-active"))
    
  fireEvent.click(screen.getByText('Add Player'))

  expect(screen.getAllByText('Add Player')[0]).toHaveAttribute("class",expect.stringContaining("nav-item-active"))

})