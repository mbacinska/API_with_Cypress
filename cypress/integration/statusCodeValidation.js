/// <reference types="Cypress" />

describe('Status code validation test', () => {
    it('validates the status code of the response', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
      cy.get('@pokemon').its('status')
      .should('equal', 200)
   
    })
  
  })