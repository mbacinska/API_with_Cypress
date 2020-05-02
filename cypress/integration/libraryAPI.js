/// <reference types="Cypress" />

describe('Http POST method test', () => {
    it('makes the POST request', () => {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
        "name":"Learn Appium Automation with Java",
        "isbn":"bcduyytreo",
        "aisle":"5698798785",
        "author":"John foe"
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('Msg', 'successfully added')
        expect(response.body).to.have.property('ID')

    })
})
})
