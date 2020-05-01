/// <reference types="Cypress" />

describe('Body content validation test', () => {
    it('validates the body of the response', () => {
      cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
      cy.get('@pokemon').its('body')
      .should('include', {name: 'pikachu'})
   
    })
    })