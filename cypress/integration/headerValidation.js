/// <reference types="Cypress" />

describe('Header validation test', () => {
  it('validates the content-type', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon').its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')

  })
  it('validates the server', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon').its('headers')
      .its('server').should('include', 'cloudflare')
  })
})