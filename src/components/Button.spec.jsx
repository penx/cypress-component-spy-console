import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('Button', () => {
  mount(<Button>Test button</Button>, {
    onBeforeLoad(win) {
      cy.stub(win.console, 'error').as('consoleError')
    },
  })
  cy.get('button').contains('Test button').click()
  // cy.get('@consoleError').to.have.callCount(0);
})