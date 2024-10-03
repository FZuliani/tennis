import { UserComponent } from '../src/app/screens/user/user.component';
import { mount } from 'cypress/angular';

describe('UserComponentn.cy.ts', () => {
  it('Test du composant user', () => {
    cy.mount(UserComponent);
    cy.get('#table_Users').should('exist');
  })
})