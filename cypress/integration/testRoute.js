/// <reference types="Cypress" />

describe('some test',()=>{
       
    it('should listen to the http GET request',()=>{
        cy.server()
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.route('GET', 'comments/*').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('status').should('eq', 200)
    })
    it.only('should listen to the http POST request', ()=>{
        cy.server()
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.route('POST', '/comments').as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').its('status').should('eq', 201)
        //validate response body
        cy.get('@postComment').should((xhr) => {
            expect(xhr.requestBody).to.include('email')
            expect(xhr.requestHeaders).to.have.property('Content-Type')
            expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
            expect(xhr.responseBody).to.have.property('id')

        })

})
})