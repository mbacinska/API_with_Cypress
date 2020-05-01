/// <reference types="Cypress" />

describe('Body content validation test', () => {
    it('validates the body of the response', () => {
cy.request({
  method: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/2500',
  failOnStatusCode:false

}).as('pokemon')
      cy.get('@pokemon').its('status')
      .should('equal', 404)
   
    })
    })