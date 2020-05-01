/// <reference types="Cypress" />

describe('Status code validation test', () => {
    it('validates the status code of the response', () => {
      cy.request('https://api.chucknorris.io/jokes/random').as('joke')
      cy.get('@joke').its('status')
      .should('equal', 200)
   
    })
  
  })