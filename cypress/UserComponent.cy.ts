import { mount } from 'cypress/angular'
import { UserComponent } from '../src/app/screens/user/user.component'

describe('Test de UserComponent.cy.ts', () => {
  it('playground', () => {
    mount(UserComponent)
    cy.get('#usersTable').should('exist')    
  })
})